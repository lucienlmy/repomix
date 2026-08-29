window.BENCHMARK_DATA = {
  "lastUpdate": 1788029494617,
  "repoUrl": "https://github.com/lucienlmy/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eed7edd13f3586fa0268c17ee5c02328f5c625a",
          "message": "Merge pull request #1818 from yamadashy/feat/mcp-registry\n\nfeat(mcp): Add MCP Registry publishing metadata and workflow",
          "timestamp": "2026-08-29T21:30:14+09:00",
          "tree_id": "057ee39480212c6e4209e289c095b1e1d2b3ccef",
          "url": "https://github.com/lucienlmy/repomix/commit/4eed7edd13f3586fa0268c17ee5c02328f5c625a"
        },
        "date": 1788007805409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 844,
            "range": "±194",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 741ms, Q3: 935ms\nAll times: 608, 654, 659, 686, 704, 707, 719, 741, 747, 772, 773, 780, 784, 829, 831, 844, 854, 863, 871, 875, 895, 916, 935, 948, 953, 954, 956, 959, 966, 983ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 902,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 896ms, Q3: 913ms\nAll times: 883, 886, 892, 892, 893, 896, 897, 899, 899, 901, 902, 902, 906, 906, 910, 913, 928, 936, 948, 952ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1321,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1309ms, Q3: 1330ms\nAll times: 1288, 1296, 1301, 1307, 1309, 1309, 1311, 1313, 1315, 1316, 1321, 1321, 1322, 1322, 1324, 1330, 1332, 1333, 1340, 1341ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "887770d2a2bb617ecdb6548954dd1385f66fa7cf",
          "message": "Merge pull request #1827 from yamadashy/security/npm-publish-split\n\nfix(security): Keep dependency code out of the npm-publishing job",
          "timestamp": "2026-08-29T23:01:04+09:00",
          "tree_id": "a7d91ac20397064bb9696fd56c4dbb26e4ef9a45",
          "url": "https://github.com/lucienlmy/repomix/commit/887770d2a2bb617ecdb6548954dd1385f66fa7cf"
        },
        "date": 1788029493943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 984,
            "range": "±65",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 944ms, Q3: 1009ms\nAll times: 840, 893, 902, 906, 935, 936, 941, 944, 949, 953, 964, 968, 969, 975, 979, 984, 985, 988, 996, 997, 1003, 1008, 1009, 1047, 1053, 1072, 1084, 1085, 1096, 1503ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 857,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 851ms, Q3: 864ms\nAll times: 845, 847, 847, 847, 850, 851, 853, 854, 854, 856, 857, 858, 860, 860, 863, 864, 865, 865, 870, 884ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1142,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1138ms, Q3: 1151ms\nAll times: 1115, 1121, 1122, 1128, 1135, 1138, 1138, 1139, 1140, 1141, 1142, 1142, 1144, 1147, 1150, 1151, 1151, 1162, 1162, 1167ms"
          }
        ]
      }
    ]
  }
}