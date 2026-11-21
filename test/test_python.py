import json
import struct
import unittest
from pathlib import Path

import iammenasco_blue as blue

ROOT = Path(__file__).resolve().parent.parent


class TestIammenascoBlue(unittest.TestCase):
    def test_tokens_match_python_package(self):
        tokens = json.loads((ROOT / "tokens.json").read_text(encoding="utf-8"))
        ext = tokens["color"]["iammenasco-blue"]["$extensions"]["org.iammenasco.color"]

        self.assertEqual(blue.HEX, "#368dda")
        self.assertEqual(blue.RGB, (ext["rgb"]["r"], ext["rgb"]["g"], ext["rgb"]["b"]))
        self.assertEqual(blue.contrast_ratio("#ffffff"), 3.51)
        self.assertEqual(blue.contrast_ratio("#000000"), 5.98)
        self.assertEqual(blue.contrast_ratio("#0d1117"), 5.39)
        self.assertEqual(blue.SCALE[500], "#368dda")

        for stop, val in tokens["color"]["iammenasco-blue-scale"].items():
            if stop.startswith("$"):
                continue
            self.assertEqual(blue.SCALE[int(stop)], val["$value"])

    def test_colorize_ansi(self):
        styled = blue.colorize("test", bold=True)
        self.assertIn("\x1b[38;2;54;141;218m", styled)
        self.assertIn("\x1b[1m", styled)
        self.assertTrue(styled.endswith("\x1b[0m"))

    def test_ase_binary_roundtrip(self):
        data = (ROOT / "swatches" / "iammenasco-blue.ase").read_bytes()
        self.assertEqual(data[:4], b"ASEF")
        major, minor, count = struct.unpack(">HHI", data[4:12])
        self.assertEqual((major, minor), (1, 0))
        self.assertEqual(count, 14)  # group start + 12 colors + group end

        offset = 12
        parsed_colors = []
        for _ in range(count):
            block_type, block_len = struct.unpack(">HI", data[offset : offset + 6])
            offset += 6
            payload = data[offset : offset + block_len]
            offset += block_len
            if block_type == 0x0001:
                name_len = struct.unpack(">H", payload[:2])[0]
                name_end = 2 + name_len * 2
                name = payload[2:name_end].decode("utf-16-be").rstrip("\x00")
                space = payload[name_end : name_end + 4]
                self.assertEqual(space, b"RGB ")
                rf, gf, bf = struct.unpack(">fff", payload[name_end + 4 : name_end + 16])
                rgb = (round(rf * 255), round(gf * 255), round(bf * 255))
                parsed_colors.append((name, rgb))

        self.assertEqual(offset, len(data))
        self.assertEqual(len(parsed_colors), 12)
        self.assertEqual(parsed_colors[0], ("iammenasco-blue", (54, 141, 218)))
        self.assertEqual(parsed_colors[6], ("iammenasco-blue-500", (54, 141, 218)))

    def test_gpl_palette_roundtrip(self):
        lines = (ROOT / "swatches" / "iammenasco-blue.gpl").read_text(encoding="utf-8").splitlines()
        self.assertEqual(lines[0], "GIMP Palette")
        entries = [line for line in lines[4:] if line.strip() and not line.startswith("#")]
        self.assertEqual(len(entries), 12)
        self.assertTrue(entries[0].startswith(" 54 141 218\tiammenasco-blue (#368dda)"))


if __name__ == "__main__":
    unittest.main()
