// document.write("<pre> <br>")
//     for (var y = 0; y < 10; y++) {
//         for (var x = 0; x < 10; x++) {
//             if (x + y >= 9 && y <= x || y + x <= 9 && x <= y)
//                 document.write(x)
//             else document.write(" ")
//         }
//         document.write("<br>")
//     }

    document.write("<pre> <br>")
        for (var y = 0; y < 10; y++) {
            for (var x = 0; x < 10; x++) {
                if (y + x < 9 && x < y || x + y >= 9 && y <= x)
                    document.write(" ")
                else document.write("*")
            }
            document.write("<br>")
        }