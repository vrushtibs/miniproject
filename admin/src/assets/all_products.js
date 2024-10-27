import camera1 from '../Assets/camera1.jpg'
import camera2 from '../Assets/camera2.png'
import camera3 from '../Assets/camera3.png'
import camera4 from '../Assets/camera4.png'
import camera5 from '../Assets/camera5.jpeg'
import camera6 from '../Assets/camera6.jpeg'
import camera7 from '../Assets/camera7.jpeg'
import camera8 from '../Assets/camera8.jpeg'
import camera9 from '../Assets/camera9.jpeg'
import camera10 from '../Assets/camera10.jpeg'
import camera11 from '../Assets/camera11.jpeg'
import camera12 from '../Assets/camera12.jpeg'

import hp1 from '../Assets/hp1.jpeg'
import hp2 from '../Assets/hp2.jpeg'
import hp3 from '../Assets/hp3.jpeg'
import hp4 from '../Assets/hp4.jpeg'
import hp5 from '../Assets/hp5.jpeg'
import hp6 from '../Assets/hp6.png'
import hp7 from '../Assets/hp7.png'
import hp8 from '../Assets/hp8.jpeg'
import hp9 from '../Assets/hp9.jpeg'
import hp10 from '../Assets/hp10.jpeg'
import hp11 from '../Assets/hp11.jpeg'
import hp12 from '../Assets/hp12.jpeg'

import sp1 from '../Assets/sp1.jpeg'
import sp2 from '../Assets/sp2.jpeg'
import sp3 from '../Assets/sp3.jpeg'
import sp4 from '../Assets/sp4.jpeg'
import sp5 from '../Assets/sp5.jpeg'
import sp6 from '../Assets/sp6.jpeg'
import sp7 from '../Assets/sp7.jpeg'
import sp8 from '../Assets/sp8.jpeg'
import sp9 from '../Assets/sp9.jpeg'
import sp10 from '../Assets/sp10.jpeg'
import sp11 from '../Assets/sp11.jpeg'
import sp12 from '../Assets/sp12.jpeg'

let all_product = [
    {
        id:1,
        name:"EOS C80 digital cinema camera",
        category:"cameras",
        image:camera1,
        new_price:56490,
        old_price:72199,
    },
    {
        id:2,
        name:"CN20x50 IAS H P1",
        category:"cameras",
        image:camera2,
        new_price:26490,
        old_price:32199,
    },
    {
        id:3,
        name:"RF10-20mm f/4L IS STM",
        category:"cameras",
        image:camera3,
        new_price:55900,
        old_price:65900,
    },
    {
        id:4,
        name:"110 Million EOS Series Camera",
        category:"cameras",
        image:camera4,
        new_price:26490,
        old_price:32199,
    },
    {
        id:5,
        name:"Sony ZV-E10 Mirrorless Camera(Black)",
        category:"cameras",
        image:camera5,
        new_price:26490,
        old_price:32199,
    },
    {
        id:6,
        name:"Sony Cyber-shot DSC-HX99",
        category:"cameras",
        image:camera6,
        new_price:11209,
        old_price:16099,
    },
    {
        id:7,
        name:"Sony ZV-E10 Mirrorless Camera(White)",
        category:"cameras",
        image:camera7,
        new_price:5990,
        old_price:8790,
    },
    {
        id:8,
        name:"Sony ZV-E10 Mirrorless Camera",
        category:"cameras",
        image:camera8,
        new_price:26490,
        old_price:32199,
    },
    {
        id:9,
        name:"4K Camcorder Video Camera 48MP",
        category:"cameras",
        image:camera9,
        new_price:26490,
        old_price:32199,
    },
    {
        id:10,
        name:"Polaroid Instant Cam",
        category:"cameras",
        image:camera10,
        new_price:3500,
        old_price:4599,
    },
    {
        id:11,
        name:"INSTAX mini 12 Instant Camera(Misty White)",
        category:"cameras",
        image:camera11,
        new_price:4599,
        old_price:6599,
    },
    {
        id:12,
        name:"Sony Alpha ILCE-6100Y 24.2 MP Digital SLR Camera",
        category:"cameras",
        image:camera12,
        new_price:73925,
        old_price:89900,
    },
    {
        id:13,
        name:"BEATS PowerBEATS Pro Wireless Bluetooth Headphones",
        category:"headphones",
        image:hp1,
        new_price:21900,
        old_price:25900,
    },
    {
        id:14,
        name:"BEATS studio wireless-Navy Blue",
        category:"headphones",
        image:hp2,
        new_price:17500,
        old_price:21599,
    },
    {
        id:15,
        name:"Boat Z Plus wireless Headphones",
        category:"headphones",
        image:hp3,
        new_price:5600,
        old_price:10999,
    },
    {
        id:16,
        name:"Bose Wireless Noise Cancelling Over Ear Headphones",
        category:"headphones",
        image:hp4,
        new_price:30388,
        old_price:35900,
    },
    {
        id:17,
        name:"AirPods Max - Sky Blue",
        category:"headphones",
        image:hp5,
        new_price:55900,
        old_price:59900,
    },
    {
        id:18,
        name:"boAt Bassheads 122 ANC w Noise Cancellation",
        category:"headphones",
        image:hp6,
        new_price:1999,
        old_price:2599,
    },
    {
        id:19,
        name:"boAt Rockerz 255 Z Plus Bluetooth in-Ear Neckband",
        category:"headphones",
        image:hp7,
        new_price:1299,
        old_price:3259,
    },
    {
        id:20,
        name:"OnePlus Nord Buds 2r True",
        category:"headphones",
        image:hp8,
        new_price:1999,
        old_price:2299,
    },
    {
        id:21,
        name:"Noise Buds N1 in-Ear Truly Wireless Earbuds",
        category:"headphones",
        image:hp9,
        new_price:2599,
        old_price:3499,
    },
    {
        id:22,
        name:"Apple AirPods Pro (2nd Generation)",
        category:"headphones",
        image:hp10,
        new_price:23399,
        old_price:24900,
    },
    {
        id:23,
        name:"Samsung Galaxy Buds2 Pro",
        category:"headphones",
        image:hp11,
        new_price:9999,
        old_price:12995,
    },
    {
        id:24,
        name:"boAt Airdopes 800 True Wireless",
        category:"headphones",
        image:hp12,
        new_price:3599,
        old_price:6499,
    },
    {
        id:25,
        name:"Creative Inspire T10 Multimedia Speakers",
        category:"speakers",
        image:sp1,
        new_price:12999,
        old_price:25999,
    },
    {
        id:26,
        name:"boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound",
        category:"speakers",
        image:sp2,
        new_price:1589,
        old_price:3499,
    },
    {
        id:27,
        name:"Anker Portable mini Bluetooth Speaker",
        category:"speakers",
        image:sp3,
        new_price:5499,
        old_price:8999,
    },
    {
        id:28,
        name:"Mini Speaker Compatible with J.B-L Speaker",
        category:"speakers",
        image:sp4,
        new_price:1239,
        old_price:4569,
    },
    {
        id:29,
        name:"boAt Stone 352 Pro Bluetooth Speaker",
        category:"speakers",
        image:sp5,
        new_price:2599,
        old_price:4459,
    },
    {
        id:30,
        name:"CALL MATE Nest 10W Wireless Bluetooth Speaker",
        category:"speakers",
        image:sp6,
        new_price:20990,
        old_price:25990,
    },
    {
        id:31,
        name:"Amazon Echo Dot 3rd Gen Smart Speaker",
        category:"speakers",
        image:sp7,
        new_price:12099,
        old_price:17099,
    },
    {
        id:32,
        name:"Amazon Echo Pop| Smart speaker with Alexa",
        category:"speakers",
        image:sp8,
        new_price:4999,
        old_price:5999,
    },
    {
        id:33,
        name:"Mini Hand Speaker",
        category:"speakers",
        image:sp9,
        new_price:2599,
        old_price:5599,
    },
    {
        id:34,
        name:"MicoLab 80W Wood Stereo Speaker",
        category:"speakers",
        image:sp10,
        new_price:12479,
        old_price:22150,
    },
    {
        id:35,
        name:"Portronics Dash 3 16W Bluetooth Speaker with Mic",
        category:"speakers",
        image:sp11,
        new_price:6579,
        old_price:8759,
    },
    {
        id:36,
        name:"JBL Go 4, Wireless Portable Bluetooth Speaker",
        category:"speakers",
        image:sp12,
        new_price:3489,
        old_price:5499,
    },
];

export default all_product;