//SI_tablet using JS/HTML/CSS

//-------HELPER FUNCTIONS------
// show slide function
function showSlide(id) {
  $(".slide").hide(); //jquery - all elements with class of slide - hide
  $("#"+id).show(); //jquery - element with given id - show
}


var sound = new Howl({
	// location of the files
	urls: ['sprite_test.mp3'],
	// information for each sample within the consolidated sound files
	sprite: {
		// values of each sample
		// syntax:
		// name: [start time, duration],
		someapple: [0, 5000],
		noneapple: [6000, 5675],
		allapple: [ 12000, 6000],
		somebanana: [19000, 5000],
		nonebanana: [25000, 6000],
		allbanana: [32000, 5500],
		somecake: [38000, 5500],
		nonecake: [45000, 5500],
		allcake: [51000, 5500],
		somecarrot: [57000, 5500],
		nonecarrot: [63000, 6000],
		allcarrot: [70000, 5500],
		somecookie: [76000, 5000],
		nonecookie: [82000, 5500],
		allcookie: [88000, 5500],
		somedonut: [94000, 5000],
		nonedonut: [100000, 5500],
		alldonut: [106000, 5000],
		someorange: [112000, 5000],
		noneorange: [118000, 5000],
		allorange: [124000, 5600],
		somepear: [130000, 5000],
		nonepear: [136000, 5000],
		allpear: [142000, 5500],
		somepizza: [148000, 5000],
		nonepizza: [154000, 5000],
		allpizza: [160000, 5500],
		somepopsicle: [166000, 5000],
		nonepopsicle: [172000, 5200],
		allpopsicle: [178000, 5500],
		somepretzel: [184000, 5000],
		nonepretzel: [190000, 5000],
		allpretzel: [196000, 5500],
		somestrawberry: [202000, 5200],
		nonestrawberry: [208000, 5300],
		allstrawberry: [214000, 5500],
		somebear: [220000, 5000],
		nonebear: [226000, 5000],
		allbear: [232000, 5500],
		somebird: [238000, 5000],
		nonebird: [244000, 5000],
		allbird: [250000, 5500],
		somecat: [256000, 5000],
		nonecat: [262000, 5000],
		allcat: [268000, 5000],
		somechicken: [274000, 5000],
		nonechicken: [280000, 5000],
		allchicken: [286000, 5300],
		somecow: [292000, 5000],
		nonecow: [298000, 5200],
		allcow: [304000, 5000],
		somedog: [310000, 5000],
		nonedog: [316000, 5200],
		alldog: [322000, 5000],
		someduck: [328000, 5000],
		noneduck: [334000, 5000],
		allduck: [340000, 5200],
		someelephant: [346000, 5000],
		noneelephant: [352000, 5300],
		allelephant: [358000, 5000],
		somefish: [364000, 5000],
		nonefish: [370000, 5200],
		allfish: [376000, 5000],
		somefrog: [382000, 5000],
		nonefrog: [388000, 5200],
		allfrog: [394000, 5000],
		somegiraffe: [400000, 5000],
		nonegiraffe: [406000, 5200],
		allgiraffe: [412000, 5000],
		somegoat: [418000, 5000],
		nonegoat: [424000, 5200],
		allgoat: [430000, 5000],
		somehorse: [436000, 5000],
		nonehorse: [442000, 5200],
		allhorse: [448000, 5000],
		somelion: [454000, 5000],
		nonelion: [460000, 5200],
		alllion: [466000, 5200],
		somemonkey: [472000, 5000],
		nonemonkey: [478000, 5200],
		allmonkey: [478000, 5200],
		someowl: [490000, 5000],
		noneowl: [496000, 5200],
		allowl: [502000, 5000],
		somepenguin: [508000, 5000],
		nonepenguin: [514000, 5200],
		allpenguin: [520000, 5000],
		somepig: [526000, 5000],
		nonepig: [532000, 5200],
		allpig: [538000, 5000],
		somesheep: [544000, 5000],
		nonesheep: [550000, 5200],
		allsheep: [556000, 5000],
		sometiger: [562000, 5000],
		nonetiger: [568000, 5200],
		alltiger: [574000, 5000],
		someturtle: [580000, 5000],
		noneturtle: [586000, 5200],
		allturtle: [592000, 5000],
		somebarn: [597000, 5004],
		nonebarn: [602005, 5033],
		allbarn: [607034, 5004],
		somebee: [612039, 5001],
		nonebee: [617041, 5030],
		allbee: [622072, 5001],
		somebus: [627074, 5001],
		nonebus: [632076, 5030],
		allbus: [637107, 5001],
		somebutterfly: [642109, 5004],
		nonebutterfly: [647114, 5033],
		allbutterfly: [652148, 5004],
		somecar: [657153, 5002],
		nonecar: [662156, 5031],
		allcar: [667188, 5002],
		somechair: [672201, 5001],
		nonechair: [677203, 5030],
		allchair: [682234, 5001],
		someclock: [687236, 5001],
		noneclock: [692238, 5030],
		allclock: [697269, 5001],
		somecomb: [702271, 5001],
		nonecomb: [707273, 5030],
		allcomb: [712304, 5001],
		somecup: [717306, 5001],
		nonecup: [722308, 5030],
		allcup: [727339, 5001],
		somecupcake: [732341,5000],
		nonecupcake: [737342, 5029],
		allcupcake: [742372, 5000],
		somefence: [747372, 5010],
		nonefence: [752383, 5039],
		allfence: [757423, 5010],
		somefiretruck: [762434, 5100],
		nonefiretruck: [767535, 5129],
		allfiretruck: [772665, 5100],
		someflower: [777766, 5001],
		noneflower: [782768, 5030],
		allflower: [787799, 5001],
		somefork: [792801, 4998],
		nonefork: [797800, 5027],
		allfork: [802828, 4998],
		somehouse: [807827, 4998],
		nonehouse: [812826, 5027],
		allhouse: [817854, 4998],
		somekey: [822853, 5003],
		nonekey: [827857, 5032],
		allkey: [832890, 5003],
		somelamp: [837894, 5001],
		nonelamp: [842896, 5030],
		alllamp: [847927, 5001],
		somemap: [852929, 5001],
		nonemap: [857931, 5030],
		allmap: [862962, 5001],
		somepartyhat: [867964, 5001],
		nonepartyhat: [872966, 5030],
		allpartyhat: [877997, 5001],
		somephone: [882999, 5001],
		nonephone: [888001, 5030],
		allphone: [893032, 5001],
		someplane: [898034, 5001],
		noneplane: [903036, 5030],
		allplane: [908067, 5001],
		someplate: [913069, 5004],
		noneplate: [918074, 5033],
		allplate: [923108, 5004],
		somepresent: [928113, 5001],
		nonepresent: [933115, 5030],
		allpresent: [938146, 5001],
		somespoon: [943148, 5001],
		nonespoon: [948150, 5030],
		allspoon: [953181, 5001],
		somestroller: [958083, 5000],
		nonestroller: [963084, 5029],
		allstroller: [968114, 5000],
		sometable: [973115, 5001],
		nonetable: [978117, 5030],
		alltable: [983148, 5001],
		sometoothbrush: [988150, 5009],
		nonetoothbrush: [993160, 5038],
		alltoothbrush: [998199, 5009],
		sometrafficlight: [1003209, 5114],
		nonetrafficlight: [1008324, 5138],
		alltrafficlight: [1013463, 5114],
		sometrain: [1018578, 5001],
		nonetrain: [1023580, 5030],
		alltrain: [1028611, 5001],
		sometree: [1033613, 5001],
		nonetree: [1038615, 5030],
		alltree: [1043646, 5001],
		somesoccer: [1048648, 5000],
		nonesoccer: [1053649, 5029],
		allsoccer: [1058679, 5000],
		someballoon: [1063680, 5010],
		noneballoon: [1068691, 5039],
		allballoon: [1073731, 5010],
		somebell: [1078742, 5001],
		nonebell: [1083744, 5030],
		allbell: [1088775, 5001],
		somebike: [1093777, 5000],
		nonebike: [1098778, 5029],
		allbike: [1103778, 5000],
		someblock: [1108779, 4998],
		noneblock: [1113778, 5027],
		allblock: [1118806, 4998],
		someboat: [1123805, 5001],
		noneboat: [1128807, 5030],
		allboat: [1133838, 5001],
		somebook: [1138840, 5000],
		nonebook: [1143841, 5029],
		allbook: [1148871, 5000],
		somebucket: [1153872, 5001],
		nonebucket: [1158874, 5030],
		allbucket: [1163905, 5001],
		somecrayon: [1168907, 5001],
		nonecrayon: [1173909, 5030],
		allcrayon: [1178940, 5001],
		somedrum: [1183942, 5001],
		nonedrum: [1188944, 5030],
		alldrum: [1193975, 5001],
		someguitar: [1198977, 5001],
		noneguitar: [1203979, 5030],
		allguitar: [1209010, 5001],
		somepaintbrush: [1214012, 5001],
		nonepaintbrush: [1219014, 5030],
		allpaintbrush: [1224045, 5001],
		somepencil: [1229047, 5000],
		nonepencil: [1234048, 5029],
		allpencil: [1239078, 5000],
		somescissors: [1244079, 5001],
		nonescissors: [1249081, 5030],
		allscissors: [1254112, 5001],
		someteddybear: [1259114, 5001],
		noneteddybear: [1264116, 5030],
		allteddybear: [1269147, 5001],
		somedress: [1274149, 5000],
		nonedress: [1279150, 5029],
		alldress: [1284180, 5000],
		someglasses: [1289181, 5000],
		noneglasses: [1294182, 5029],
		allglasses: [1299212, 5000],
		somehat: [1304213, 5000],
		nonehat: [1309214, 5029],
		allhat: [1314244, 5000],
		somemitten: [1319245, 5001],
		nonemitten: [1324247, 5030],
		allmitten: [1329278, 5001],
		somenecklace: [1334280, 5051],
		nonenecklace: [1339332, 5080],
		allnecklace: [1344413, 5051],
		somepurse: [1349465, 5000],
		nonepurse: [1354466, 5029],
		allpurse: [1359496, 5000],
		someshirt: [1364496, 5000],
		noneshirt: [1369497, 5029],
		allshirt: [1374527, 5000],
		someshoe: [1379528, 5000],
		noneshoe: [1384529, 5029],
		allshoe: [1389559, 5000],
		someshorts: [1394560, 5001],
		noneshorts: [1399562, 5030],
		allshorts: [1404593, 5001],
		somesock: [1409595, 5000],
		nonesock: [1414596, 5029],
		allsock: [1419626, 5000],
		somewatch: [1424627, 5001],
		nonewatch: [1429629, 5030],
		allwatch: [1434660, 5001],
		somezipper: [1439662, 5000],
		nonezipper: [1444663, 5029],
		allzipper: [1449663, 5000],
		practice: [1454694, 3622],
		silence: [1458317, 1000]
	}
});

//this is for getting the reaction times - there is probably a better way to do it
var time = ({
	clip: {
		someapple: [0, 4224, 5000],
		noneapple: [6000, 10414, 5675],
		allapple: [ 12000, 16879, 6000],
		somebanana: [19000, 23390, 5000],
		nonebanana: [25000, 29949, 6000],
		allbanana: [32000, 36001, 5500],
		somecake: [38000, 42376, 5500],
		nonecake: [45000, 49736, 5500],
		allcake: [51000, 55695, 5500],
		somecarrot: [57000, 61686, 5500],
		nonecarrot: [63000, 67699, 6000],
		allcarrot: [70000, 74727, 5500],
		somecookie: [76000, 80222, 5000],
		nonecookie: [82000, 86693, 5500],
		allcookie: [88000, 92744, 5500],
		somedonut: [94000, 98189, 5000],
		nonedonut: [100000, 104453, 5500],
		alldonut: [106000, 110346, 5000],
		someorange: [112000, 116152, 5000],
		noneorange: [118000, 122388, 5000],
		allorange: [124000, 128527, 5600],
		somepear: [130000, 134217, 5000],
		nonepear: [136000, 140247, 5000],
		allpear: [142000, 146525, 5500],
		somepizza: [148000, 152109, 5000],
		nonepizza: [154000, 158291, 5000],
		allpizza: [160000, 164670, 5500],
		somepopsicle: [166000, 170153, 5000],
		nonepopsicle: [172000, 176491, 5200],
		allpopsicle: [178000, 182430, 5500],
		somepretzel: [184000, 188154, 5000],
		nonepretzel: [190000, 194402, 5000],
		allpretzel: [196000, 200387, 5500],
		somestrawberry: [202000, 206176, 5200],
		nonestrawberry: [208000, 212227, 5300],
		allstrawberry: [214000, 218300, 5500],
		somebear: [220000, 224274, 5000],
		nonebear: [226000, 230267, 5000],
		allbear: [232000, 236274, 5500],
		somebird: [238000, 242282, 5000],
		nonebird: [244000, 248372, 5000],
		allbird: [250000, 254360, 5500],
		somecat: [256000, 260306, 5000],
		nonecat: [262000, 266293, 5000],
		allcat: [268000, 272301, 5000],
		somechicken: [274000, 278432, 5000],
		nonechicken: [280000, 284337, 5000],
		allchicken: [286000, 290345, 5300],
		somecow: [292000, 296209, 5000],
		nonecow: [298000, 302258, 5200],
		allcow: [304000, 308246, 5000],
		somedog: [310000, 314376, 5000],
		nonedog: [316000, 320384, 5200],
		alldog: [322000, 326433, 5000],
		someduck: [328000, 332277, 5000],
		noneduck: [334000, 338305, 5000],
		allduck: [340000, 344334, 5200],
		someelephant: [346000, 350239, 5000],
		noneelephant: [352000, 356288, 5300],
		allelephant: [358000, 362234, 5000],
		somefish: [364000, 368345, 5000],
		nonefish: [370000, 374352, 5200],
		allfish: [376000, 380299, 5000],
		somefrog: [382000, 386348, 5000],
		nonefrog: [388000, 392376, 5200],
		allfrog: [394000, 398363, 5000],
		somegiraffe: [400000, 404207, 5000],
		nonegiraffe: [406000, 410235, 5200],
		allgiraffe: [412000, 416182, 5000],
		somegoat: [418000, 422333, 5000],
		nonegoat: [424000, 428361, 5200],
		allgoat: [430000, 434349, 5000],
		somehorse: [436000, 440275, 5000],
		nonehorse: [442000, 446303, 5200],
		allhorse: [448000, 452290, 5000],
		somelion: [454000, 458319, 5000],
		nonelion: [460000, 464327, 5200],
		alllion: [466000, 470334, 5200],
		somemonkey: [472000, 476281, 5000],
		nonemonkey: [478000, 482310, 5200],
		allmonkey: [478000, 488296, 5200],
		someowl: [490000, 494345, 5000],
		noneowl: [496000, 500372, 5200],
		allowl: [502000, 506340, 5000],
		somepenguin: [508000, 512246, 5000],
		nonepenguin: [514000, 518254,  5200],
		allpenguin: [520000, 524220, 5000],
		somepig: [526000, 530351, 5000],
		nonepig: [532000, 536359, 5200],
		allpig: [538000, 542306, 5000],
		somesheep: [544000, 548272, 5000],
		nonesheep: [550000,554301, 5200],
		allsheep: [556000, 560268, 5000],
		sometiger: [562000, 566603, 5000],
		nonetiger: [568000, 572324, 5200],
		alltiger: [574000, 578271, 5000],
		someturtle: [580000, 584259, 5000],
		noneturtle: [586000, 590245, 5200],
		allturtle: [592000, 596270, 5000],
		somebarn: [597000, 601215, 5004],
		nonebarn: [602005, 606280, 5033],
		allbarn: [607034, 611283, 5004],
		somebee: [612039, 616266, 5001],
		nonebee: [617041, 621310, 5030],
		allbee: [622072, 626313, 5001],
		somebus: [627074, 631357,  5001],
		nonebus: [632076, 636360, 5030],
		allbus: [637107, 641383, 5001],
		somebutterfly: [642109, 646305, 5004],
		nonebutterfly: [647114, 651370, 5033],
		allbutterfly: [652148, 656352, 5004],
		somecar: [657153, 661437, 5002],
		nonecar: [662156, 666461, 5031],
		allcar: [667188, 671464, 5002],
		somechair: [672201, 676385, 5001],
		nonechair: [677203, 681429, 5030],
		allchair: [682234, 686432, 5001],
		someclock: [687236, 691456, 5001],
		noneclock: [692238, 696440, 5030],
		allclock: [697269, 701462, 5001],
		somecomb: [702271, 706424, 5001],
		nonecomb: [707273, 711469, 5030],
		allcomb: [712304, 716451, 5001],
		somecup: [717306, 721536, 5001],
		nonecup: [722308, 726519, 5030],
		allcup: [727339, 731583, 5001],
		somecupcake: [732341, 736505, 5000],
		nonecupcake: [737342, 741510, 5029],
		allcupcake: [742372, 746531, 5000],
		somefence: [747372, 751575, 5010],
		nonefence: [752383, 756620, 5039],
		allfence: [757423, 761623, 5010],
		somefiretruck: [762434, 766605, 5100],
		nonefiretruck: [767535, 771731, 5129],
		allfiretruck: [772665, 776899, 5100],
		someflower: [777766,  781922, 5001],
		noneflower: [782768, 786946, 5030],
		allflower: [787799, 791990, 5001],
		somefork: [792801, 796994, 4998],
		nonefork: [797800, 802058, 5027],
		allfork: [802828, 807101, 4998],
		somehouse: [807827, 812002, 4998],
		nonehouse: [812826, 817026, 5027],
		allhouse: [817854, 822009, 4998],
		somekey: [822853, 826991, 5003],
		nonekey: [827857, 832015, 5032],
		allkey: [832890, 837018, 5003],
		somelamp: [837894, 842062, 5001],
		nonelamp: [842896,847065, 5030],
		alllamp: [847927, 852048, 5001],
		somemap: [852929, 857092, 5001],
		nonemap: [857931, 862136, 5030],
		allmap: [862962, 867119, 5001],
		somepartyhat: [867964, 872040, 5001],
		nonepartyhat: [872966, 877105, 5030],
		allpartyhat: [877997, 882108, 5001],
		somephone: [882999, 887213, 5001],
		nonephone: [888001, 892176, 5030],
		allphone: [893032, 897261, 5001],
		someplane: [898034, 902242, 5001],
		noneplane: [903036, 907287, 5030],
		allplane: [908067, 912249, 5001],
		someplate: [913069, 917232, 5004],
		noneplate: [918074, 922297, 5033],
		allplate: [923108, 927280, 5004],
		somepresent: [928113, 932262, 5001],
		nonepresent: [933115, 937347, 5030],
		allpresent: [938146, 942330, 5001],
		somespoon: [943148, 947312, 5001],
		nonespoon: [948150, 952278, 5030],
		allspoon: [953181, 957298, 5001],
		somestroller: [958083, 962322, 5000],
		nonestroller: [963084, 967284, 5029],
		allstroller: [968114, 972328, 5000],
		sometable: [973115, 977434, 5001],
		nonetable: [978117, 982437, 5030],
		alltable: [983148,  987420, 5001],
		sometoothbrush: [988150, 992320, 5009],
		nonetoothbrush: [993160, 997384, 5038],
		alltoothbrush: [998199, 1002369, 5009],
		sometrafficlight: [1003209, 1007411, 5114],
		nonetrafficlight: [1008324, 1012517, 5138],
		alltrafficlight: [1013463, 1017602, 5114],
		sometrain: [1018578, 1022790, 5001],
		nonetrain: [1023580, 1027854, 5030],
		alltrain: [1028611, 1032857, 5001],
		sometree: [1033613, 1037840, 5001],
		nonetree: [1038615, 1042905, 5030],
		alltree: [1043646, 1047928, 5001],
		somesoccer: [1048648, 1052911, 5000],
		nonesoccer: [1053649, 1057976, 5029],
		allsoccer: [1058679, 1062976, 5000],
		someballoon: [1063680, 1067900, 5010],
		noneballoon: [1068691, 1072923, 5039],
		allballoon: [1073731, 1077927, 5010],
		somebell: [1078742, 1083012, 5001],
		nonebell: [1083744, 1088076, 5030],
		allbell: [1088775, 1093059, 5001],
		somebike: [1093777, 1098083, 5000],
		nonebike: [1098778, 1103065, 5029],
		allbike: [1103778, 1108068, 5000],
		someblock: [1108779, 1113030, 4998],
		noneblock: [1113778, 1118073, 5027],
		allblock: [1118806, 1123078, 4998],
		someboat: [1123805, 1128060, 5001],
		noneboat: [1128807, 1133105, 5030],
		allboat: [1133838, 1138087, 5001],
		somebook: [1138840, 1143090, 5000],
		nonebook: [1143841, 1148114, 5029],
		allbook: [1148871, 1153096, 5000],
		somebucket: [1153872, 1158141, 5001],
		nonebucket: [1158874, 1163185, 5030],
		allbucket: [1163905, 1168167, 5001],
		somecrayon: [1168907, 1173231, 5001],
		nonecrayon: [1173909, 1178215, 5030],
		allcrayon: [1178940, 1183238, 5001],
		somedrum: [1183942, 1188200, 5001],
		nonedrum: [1188944, 1193265, 5030],
		alldrum: [1193975, 1198268, 5001],
		someguitar: [1198977, 1203148, 5001],
		noneguitar: [1203979, 1208192, 5030],
		allguitar: [1209010, 1213174, 5001],
		somepaintbrush: [1214012, 1218219, 5001],
		nonepaintbrush: [1219014, 1223243, 5030],
		allpaintbrush: [1224045, 1228246, 5001],
		somepencil: [1229047, 1233269, 5000],
		nonepencil: [1234048, 1238293, 5029],
		allpencil: [1239078, 1243296, 5000],
		somescissors: [1244079, 1248279, 5001],
		nonescissors: [1249081, 1253302, 5030],
		allscissors: [1254112, 1258346, 5001],
		someteddybear: [1259114, 1263309, 5001],
		noneteddybear: [1264116, 1268373, 5030],
		allteddybear: [1269147, 1273397, 5001],
		somedress: [1274149, 1278359, 5000],
		nonedress: [1279150, 1283422, 5029],
		alldress: [1284180, 1288426, 5000],
		someglasses: [1289181, 1293389, 5000],
		noneglasses: [1294182, 1298474, 5029],
		allglasses: [1299212, 1303436, 5000],
		somehat: [1304213, 1308480, 5000],
		nonehat: [1309214, 1313463,5029],
		allhat: [1314244, 1318486, 5000],
		somemitten: [1319245, 1323428, 5001],
		nonemitten: [1324247, 1328431, 5030],
		allmitten: [1329278, 1333495, 5001],
		somenecklace: [1334280, 1338478, 5051],
		nonenecklace: [1339332, 1343523, 5080],
		allnecklace: [1344413, 1348628, 5051],
		somepurse: [1349465, 1353652, 5000],
		nonepurse: [1354466,1358675,  5029],
		allpurse: [1359496, 1363699, 5000],
		someshirt: [1364496, 1368723, 5000],
		noneshirt: [1369497, 1373746,5029],
		allshirt: [1374527, 1378729, 5000],
		someshoe: [1379528, 1383732, 5000],
		noneshoe: [1384529, 1388756, 5029],
		allshoe: [1389559, 1393739, 5000],
		someshorts: [1394560, 1398803, 5001],
		noneshorts: [1399562, 1403826, 5030],
		allshorts: [1404593, 1408809, 5001],
		somesock: [1409595, 1413833, 5000],
		nonesock: [1414596, 1418836, 5029],
		allsock: [1419626, 1423860, 5000],
		somewatch: [1424627, 1428800, 5001],
		nonewatch: [1429629, 1433845, 5030],
		allwatch: [1434660, 1438828, 5001],
		somezipper: [1439662, 1443872, 5000],
		nonezipper: [1444663, 1448897, 5029],
		allzipper: [1449663, 1453981, 5000],
		practice: [1454694, 3622]
	}
});

//sound sprite
//this is in ms!
//var sound = new Howl({
//	// location of the files
//	urls: ['sprite_test.mp3'],
//	// information for each sample within the consolidated sound files
//	sprite: {
//		someapple: [1600,  3400],
//		noneapple: [7600,  4076],
//		allapple: [ 14200,  4800],
//		somebanana: [20600, 3400],
//		nonebanana: [27261, 4400],
//		allbanana: [33200, 4300],
//		somecake: [39600, 3900],
//		nonecake: [47058, 3937],
//		allcake: [53209, 3322],
//		somecarrot: [59176, 3548],
//		nonecarrot: [65143, 4019],
//		allcarrot: [72279, 3547],
//		somecookie: [77753,3343],
//		nonecookie: [84069, 3588],
//		allcookie: [90261, 3199],
//		somedonut: [95674, 3343],
//		nonedonut: [101764, 3671],
//		alldonut: [107834, 3465],
//		someorange: [113616, 3506],
//		noneorange: [119726, 3609],
//		allorange: [126554, 3343],
//		somepear: [131845, 3343],
//		nonepear: [137586, 3527],
//		allpear: [144065, 3384],
//		somepizza: [149622, 3342],
//		nonepizza: [155609, 3855],
//		allpizza: [162253, 3240],
//		somepopsicle: [167666, 3609],
//		nonepopsicle: [173694, 3609],
//		allpopsicle: [179989, 3404],
//		somepretzel: [185628, 3342],
//		nonepretzel: [191697, 3548],
//		allpretzel: [197808, 3527],
//		somestrawberry: [203672, 3547],
//		nonestrawberry: [209700, 3691],
//		allstrawberry: [215872, 3466],
//		somebear: [221798, 3404],
//		nonebear: [227539, 3589],
//		allbear: [233793, 3527],
//		somebird: [239719,3548],
//		nonebird: [245563, 3468],
//		allbird: [251817,  3547],
//		somecat: [257702,  3424],
//		nonecat: [263607,3465],
//		allcat: [269779, 3588],
//		somechicken: [275746, 3383],
//		nonechicken: [281487, 3670],
//		allchicken: [287802, 3302],
//		somecow: [293687, 3568],
//		nonecow: [299531,3834],
//		allcow: [305682, 3548],
//		somedog: [311670, 3547],
//		nonedog: [317493, 3937],
//		alldog: [323727, 3588],
//		someduck: [329632, 3629],
//		noneduck: [335599, 3711],
//		allduck: [341689, 3506],
//		someelephant: [347737, 3445],
//		noneelephant: [353581,3548],
//		allelephant: [359692,  3608],
//		somefish: [365679, 3465],
//		nonefish: [371523, 3691],
//		allfish: [377818, 3547],
//		somefrog: [383600, 3588],
//		nonefrog: [389628, 3712],
//		allfrog: [395739, 3567],
//		somegiraffe: [401665, 3608],
//		nonegiraffe: [407529, 3855],
//		allgiraffe: [413660, 3834],
//		somegoat: [419688, 3506],
//		nonegoat: [425593, 3609],
//		allgoat: [431724, 3568],
//		somehorse: [437671, 3526],
//		nonehorse: [443535, 3588],
//		allhorse: [449727, 3343],
//		somelion: [455653, 3609],
//		nonelion: [461517, 3814],
//		alllion: [467751, 3424],
//		somemonkey: [473656, 3629],
//		nonemonkey: [479479, 3814],
//		allmonkey: [485713, 3363],
//		someowl: [491659, 3896],
//		noneowl: [497564, 3691],
//		allowl: [503654,3691],
//		somepenguin: [509703, 3445],
//		nonepenguin: [515506,3506],
//		allpenguin: [521657, 3466],
//		somepig: [527727, 3629],
//		nonepig: [533612, 3629],
//		allpig: [539619,  3486],
//		somesheep: [545709,  3404],
//		nonesheep: [551471,3773],
//		allsheep: [557704, 3609],
//		sometiger: [563692, 3588],
//		nonetiger: [569556, 3670],
//		alltiger: [575606,  3588],
//		someturtle: [581654, 3363],
//		noneturtle: [587539, 3690],
//		allturtle: [593731, 3137],
//		somebarn: [598500, 3433],
//		nonebarn: [603512, 3486],
//		allbarn: [608699, 3363],
//		somebee: [613682, 3178],
//		nonebee: [618665, 3260],
//		allbee: [623750, 3198],
//		somebus: [628731,  3240],
//		nonebus: [633592, 3424],
//		allbus: [638800, 3219],
//		somebutterfly: [643783, 3342],
//		nonebutterfly: [648704, 3445],
//		allbutterfly: [653727, 3548],
//		somecar: [658813, 3362],
//		nonecar: [663652, 3588],
//		allcar: [668962, 3240],
//		somechair: [673822,  3219],
//		nonechair: [678743, 3363],
//		allchair: [683910,  3260],
//		someclock: [688913, 3322],
//		noneclock: [693691, 3588],
//		allclock: [698961, 3342],
//		somecomb: [703902, 3301],
//		nonecomb: [708782,3343],
//		allcomb: [713970, 3240],
//		somecup: [718973,  3240],
//		nonecup: [723812,  3486],
//		allcup: [728979, 3302],
//		somecupcake: [734023,  3281],
//		nonecupcake: [738842, 3527],
//		allcupcake: [744091,  3260],
//		somefence: [749033, 3322],
//		nonefence: [753954, 3281],
//		allfence: [759039, 3301],
//		somefiretruck: [764145, 3342],
//		nonefiretruck: [769045, 3568],
//		allfiretruck: [774274, 3465],
//		someflower: [779380,  3280],
//		noneflower: [784280,3404],
//		allflower: [789488,  3281],
//		somefork: [794430, 3260],
//		nonefork: [799310, 3383],
//		allfork: [804457, 3404],
//		somehouse: [809480, 3343],
//		nonehouse: [814278, 3466],
//		allhouse: [819466, 3363],
//		somekey: [824510,  3301],
//		nonekey: [829370,3424],
//		allkey: [834496,  3404],
//		somelamp: [839602,  3198],
//		nonelamp: [844359, 3424],
//		alllamp: [849485,  3424],
//		somemap: [854550,  3260],
//		nonemap: [859389,  3424],
//		allmap: [864494,  3445],
//		somepartyhat: [869538, 3343],
//		nonepartyhat: [874439,  3527],
//		allpartyhat: [879606,  3383],
//		somephone: [884548,  3444],
//		nonephone: [889469, 3465],
//		allphone: [894677,  3404],
//		someplane: [899762,  3137],
//		noneplane: [904601,  3260],
//		allplane: [909707, 3301],
//		someplate: [914669,  3219],
//		noneplate: [919549,  3424],
//		allplate: [924798,  3219],
//		somepresent: [929699,  3281],
//		nonepresent: [934476,  3568],
//		allpresent: [939705,  3301],
//		somespoon: [944749,  3342],
//		nonespoon: [949568,  3445],
//		allspoon: [954735,  3342],
//		somestroller: [959738,  3322],
//		nonestroller: [964577,  3527],
//		allstroller: [969765,  3424],
//		sometable: [974850,  3281],
//		nonetable: [979669,  3485],
//		alltable: [984836,   3342],
//		sometoothbrush: [989859,  3302],
//		nonetoothbrush: [994678, 3527],
//		alltoothbrush: [999886,  3445],
//		sometrafficlight: [1004971,  3404],
//		nonetrafficlight: [1009790,  3691],
//		alltrafficlight: [1015182,  3466],
//		sometrain: [1020288,  3240],
//		nonetrain: [1025086,  3424],
//		alltrain: [1030376,  3199],
//		sometree: [1035277,  3260],
//		nonetree: [1040157,  3465],
//		alltree: [1045304,  3301],
//		somesoccer: [1050368,  3220],
//		nonesoccer: [1055166,  3486],
//		allsoccer: [1060375,  3362],
//		someballoon: [1065398, 3260],
//		noneballoon: [1070196,  3425],
//		allballoon: [1075404, 3343],
//		somebell: [1080510,  3240],
//		nonebell: [1085329,  3424],
//		allbell: [1090496, 3240],
//		somebike: [1095437,  3240],
//		nonebike: [1100338, 3383],
//		allbike: [1105485,  3301],
//		someblock: [1110426,  3240],
//		noneblock: [1115306, 3343],
//		allblock: [1120576,  3158],
//		someboat: [1125579,  3199],
//		noneboat: [1130377,3363],
//		allboat: [1135503, 3322],
//		somebook: [1140507,  3137],
//		nonebook: [1145407,  3363],
//		allbook: [1150554,  3301],
//		somebucket: [1155516,  3301],
//		nonebucket: [1160458,  3424],
//		allbucket: [1165584,  3424],
//		somecrayon: [1170628,  3240],
//		nonecrayon: [1175446,  3384],
//		allcrayon: [1180614,3301],
//		somedrum: [1185740, 3137],
//		nonedrum: [1190476,  3322],
//		alldrum: [1195582,  3260],
//		someguitar: [1200667, 3219],
//		noneguitar: [1205547, 3363],
//		allguitar: [1210694, 3240],
//		somepaintbrush: [1215697, 3383],
//		nonepaintbrush: [1220577, 3486],
//		allpaintbrush: [1225683, 3506],
//		somepencil: [1230686, 3219],
//		nonepencil: [1235566, 3486],
//		allpencil: [1240692, 3383],
//		somescissors: [1245577, 3280],
//		nonescissors: [1250616, 3342],
//		allscissors: [1255783, 3179],
//		someteddybear: [1260807, 3199],
//		noneteddybear: [1265605, 3547],
//		allteddybear: [11270854, 3322],
//		somedress: [1275816, 3343],
//		nonedress: [1280696, 3507],
//		alldress: [1285741, 3465],
//		someglasses: [1290908, 3281],
//		noneglasses: [1295706, 3445],
//		allglasses: [1300914,3322],
//		somehat: [1305958, 3158],
//		nonehat: [1310695, 3383],
//		allhat: [1315862, 3424],
//		somemitten: [1320968,3239],
//		nonemitten: [1325807, 3485],
//		allmitten: [1320851, 3403],
//		somenecklace: [1335997, 3343],
//		nonenecklace: [1340857, 3465],
//		allnecklace: [1346024, 3424],
//		somepurse: [1351109, 3343],
//		nonepurse: [1355969,3486],
//		allpurse: [1361136, 3404],
//		someshirt: [1366098,3363],
//		noneshirt: [1370978, 3548],
//		allshirt: [1376125, 3383],
//		someshoe: [1381190, 3301],
//		noneshoe: [1386049, 3486],
//		allshoe: [1391134, 3404],
//		someshorts: [1396137, 3322],
//		noneshorts: [1401038, 3547],
//		allshorts: [1406246,  3322],
//		somesock: [1411208,  3342],
//		nonesock: [1416027,3506],
//		allsock: [1421173, 3486],
//		somewatch: [1426156,  3342],
//		nonewatch: [1431016, 3424],
//		allwatch: [1436285,  3384],
//		somezipper: [1441268, 3342],
//		nonezipper: [1446107, 3527],
//		allzipper: [1451315,  3424],
//		practice: [1454694, 3622]
//
//	}
//});
//
//
////this is for getting the reaction times - there is probably a better way to do it
////note, this is [start, onset of target noun, duration]
//var time = ({
//	clip: {
//		someapple: [1600, 4224, 3400],
//		noneapple: [7600, 10414, 4076],
//		allapple: [ 14200, 16879, 4800],
//		somebanana: [20600, 23390, 3400],
//		nonebanana: [27261, 29949, 4400],
//		allbanana: [33200, 36001, 4300],
//		somecake: [39600, 42376, 3900],
//		nonecake: [47058, 49736, 3937],
//		allcake: [53209, 55695, 3322],
//		somecarrot: [59176, 61686, 3548],
//		nonecarrot: [65143, 67699, 4019],
//		allcarrot: [72279, 74727, 3547],
//		somecookie: [77753, 80222, 3343],
//		nonecookie: [84069, 86693, 3588],
//		allcookie: [90261, 92744, 3199],
//		somedonut: [95674, 98189, 3343],
//		nonedonut: [101764, 104453, 3671],
//		alldonut: [107834, 110346, 3465],
//		someorange: [113616, 116152, 3506],
//		noneorange: [119726, 122388, 3609],
//		allorange: [126554, 128527, 3343],
//		somepear: [131845, 134217, 3343],
//		nonepear: [137586, 140247, 3527],
//		allpear: [144065, 146525, 3384],
//		somepizza: [149622, 152109, 3342],
//		nonepizza: [155609, 158291, 3855],
//		allpizza: [162253, 164670, 3240],
//		somepopsicle: [167666, 170153, 3609],
//		nonepopsicle: [173694, 176491, 3609],
//		allpopsicle: [179989, 182430, 3404],
//		somepretzel: [185628, 188154, 3342],
//		nonepretzel: [191697, 194402, 3548],
//		allpretzel: [197808, 200387, 3527],
//		somestrawberry: [203672, 206176, 3547],
//		nonestrawberry: [209700, 212227, 3691],
//		allstrawberry: [215872, 218300, 3466],
//		somebear: [221798, 224274, 3404],
//		nonebear: [227539, 230267, 3589],
//		allbear: [233793, 236274, 3527],
//		somebird: [239719, 242282, 3548],
//		nonebird: [245563, 248372, 3468],
//		allbird: [251817, 254360, 3547],
//		somecat: [257702, 260306, 3424],
//		nonecat: [263607, 266293, 3465],
//		allcat: [269779, 272301, 3588],
//		somechicken: [275746, 278432, 3383],
//		nonechicken: [281487, 284337, 3670],
//		allchicken: [287802, 290345, 3302],
//		somecow: [293687, 296209, 3568],
//		nonecow: [299531, 302258, 3834],
//		allcow: [305682, 308246, 3548],
//		somedog: [311670, 314376, 3547],
//		nonedog: [317493, 320384, 3937],
//		alldog: [323727, 326433, 3588],
//		someduck: [329632, 332277, 3629],
//		noneduck: [335599, 338305, 3711],
//		allduck: [341689, 344334, 3506],
//		someelephant: [347737, 350239, 3445],
//		noneelephant: [353581, 356288, 3548],
//		allelephant: [359692, 362234, 3608],
//		somefish: [365679, 368345, 3465],
//		nonefish: [371523, 374352, 3691],
//		allfish: [377818, 380299, 3547],
//		somefrog: [383600, 386348, 3588],
//		nonefrog: [389628, 392376, 3712],
//		allfrog: [395739, 398363, 3567],
//		somegiraffe: [401665, 404207, 3608],
//		nonegiraffe: [407529, 410235, 3855],
//		allgiraffe: [413660, 416182, 3834],
//		somegoat: [419688, 422333, 3506],
//		nonegoat: [425593, 428361, 3609],
//		allgoat: [431724, 434349, 3568],
//		somehorse: [437671, 440275, 3526],
//		nonehorse: [443535, 446303, 3588],
//		allhorse: [449727, 452290, 3343],
//		somelion: [455653, 458319, 3609],
//		nonelion: [461517, 464327, 3814],
//		alllion: [467751, 470334, 3424],
//		somemonkey: [473656, 476281, 3629],
//		nonemonkey: [479479, 482310, 3814],
//		allmonkey: [485713, 488296, 3363],
//		someowl: [491659, 494345, 3896],
//		noneowl: [497564, 500372, 3691],
//		allowl: [503654, 506340, 3691],
//		somepenguin: [509703, 512246, 3445],
//		nonepenguin: [515506, 518254,  3506],
//		allpenguin: [521657, 524220, 3466],
//		somepig: [527727, 530351, 3629],
//		nonepig: [533612, 536359, 3629],
//		allpig: [539619, 542306, 3486],
//		somesheep: [545709, 548272, 3404],
//		nonesheep: [551471,554301, 3773],
//		allsheep: [557704, 560268, 3609],
//		sometiger: [563692, 566603, 3588],
//		nonetiger: [569556, 572324, 3670],
//		alltiger: [575606, 578271, 3588],
//		someturtle: [581654, 584259, 3363],
//		noneturtle: [587539, 590245, 3690],
//		allturtle: [593731, 596270, 3137],
//		somebarn: [598500, 601215, 3433],
//		nonebarn: [603512, 606280, 3486],
//		allbarn: [608699, 611283, 3363],
//		somebee: [613682, 616266, 3178],
//		nonebee: [618665, 621310, 3260],
//		allbee: [623750, 626313, 3198],
//		somebus: [628731, 631357,  3240],
//		nonebus: [633592, 636360, 3424],
//		allbus: [638800, 641383, 3219],
//		somebutterfly: [643783, 646305, 3342],
//		nonebutterfly: [648704, 651370, 3445],
//		allbutterfly: [653727, 656352, 3548],
//		somecar: [658813, 661437, 3362],
//		nonecar: [663652, 666461, 3588],
//		allcar: [668962, 671464, 3240],
//		somechair: [673822, 676385, 3219],
//		nonechair: [678743, 681429, 3363],
//		allchair: [683910, 686432, 3260],
//		someclock: [688913, 691456, 3322],
//		noneclock: [693691, 696440, 3588],
//		allclock: [698961, 701462, 3342],
//		somecomb: [703902, 706424, 3301],
//		nonecomb: [708782, 711469, 3343],
//		allcomb: [713970, 716451, 3240],
//		somecup: [718973, 721536, 3240],
//		nonecup: [723812, 726519, 3486],
//		allcup: [728979, 731583, 3302],
//		somecupcake: [734023, 736505, 3281],
//		nonecupcake: [738842, 741510, 3527],
//		allcupcake: [744091, 746531, 3260],
//		somefence: [749033, 751575, 3322],
//		nonefence: [753954, 756620, 3281],
//		allfence: [759039, 761623, 3301],
//		somefiretruck: [764145, 766605, 3342],
//		nonefiretruck: [769045, 771731, 3568],
//		allfiretruck: [774274, 776899, 3465],
//		someflower: [779380,  781922, 3280],
//		noneflower: [784280, 786946, 3404],
//		allflower: [789488, 791990, 3281],
//		somefork: [794430, 796994, 3260],
//		nonefork: [799310, 802058, 3383],
//		allfork: [804457, 807101, 3404],
//		somehouse: [809480, 812002, 3343],
//		nonehouse: [814278, 817026, 3466],
//		allhouse: [819466, 822009, 3363],
//		somekey: [824510, 826991, 3301],
//		nonekey: [829370, 832015, 3424],
//		allkey: [834496, 837018, 3404],
//		somelamp: [839602, 842062, 3198],
//		nonelamp: [844359,847065, 3424],
//		alllamp: [849485, 852048, 3424],
//		somemap: [854550, 857092, 3260],
//		nonemap: [859389, 862136, 3424],
//		allmap: [864494, 867119, 3445],
//		somepartyhat: [869538, 872040, 3343],
//		nonepartyhat: [874439, 877105, 3527],
//		allpartyhat: [879606, 882108, 3383],
//		somephone: [884548, 887213, 3444],
//		nonephone: [889469, 892176, 3465],
//		allphone: [894677, 897261, 3404],
//		someplane: [899762, 902242, 3137],
//		noneplane: [904601, 907287, 3260],
//		allplane: [909707, 912249, 3301],
//		someplate: [914669, 917232, 3219],
//		noneplate: [919549, 922297, 3424],
//		allplate: [924798, 927280, 3219],
//		somepresent: [929699, 932262, 3281],
//		nonepresent: [934476, 937347, 3568],
//		allpresent: [939705, 942330, 3301],
//		somespoon: [944749, 947312, 3342],
//		nonespoon: [949568, 952278, 3445],
//		allspoon: [954735, 957298, 3342],
//		somestroller: [959738, 962322, 3322],
//		nonestroller: [964577, 967284, 3527],
//		allstroller: [969765, 972328, 3424],
//		sometable: [974850, 977434, 3281],
//		nonetable: [979669, 982437, 3485],
//		alltable: [984836,  987420, 3342],
//		sometoothbrush: [989859, 992320, 3302],
//		nonetoothbrush: [994678, 997384, 3527],
//		alltoothbrush: [999886, 1002369, 3445],
//		sometrafficlight: [1004971, 1007411, 3404],
//		nonetrafficlight: [1009790, 1012517, 3691],
//		alltrafficlight: [1015182, 1017602, 3466],
//		sometrain: [1020288, 1022790, 3240],
//		nonetrain: [1025086, 1027854, 3424],
//		alltrain: [1030376, 1032857, 3199],
//		sometree: [1035277, 1037840, 3260],
//		nonetree: [1040157, 1042905, 3465],
//		alltree: [1045304, 1047928, 3301],
//		somesoccer: [1050368, 1052911, 3220],
//		nonesoccer: [1055166, 1057976, 3486],
//		allsoccer: [1060375, 1062976, 3362],
//		someballoon: [1065398, 1067900, 3260],
//		noneballoon: [1070196, 1072923, 3425],
//		allballoon: [1075404, 1077927, 3343],
//		somebell: [1080510, 1083012, 3240],
//		nonebell: [1085329, 1088076, 3424],
//		allbell: [1090496, 1093059, 3240],
//		somebike: [1095437, 1098083, 3240],
//		nonebike: [1100338, 1103065, 3383],
//		allbike: [1105485, 1108068, 3301],
//		someblock: [1110426, 1113030, 3240],
//		noneblock: [1115306, 1118073, 3343],
//		allblock: [1120576, 1123078, 3158],
//		someboat: [1125579, 1128060, 3199],
//		noneboat: [1130377, 1133105, 3363],
//		allboat: [1135503, 1138087, 3322],
//		somebook: [1140507, 1143090, 3137],
//		nonebook: [1145407, 1148114, 3363],
//		allbook: [1150554, 1153096, 3301],
//		somebucket: [1155516, 1158141, 3301],
//		nonebucket: [1160458, 1163185, 3424],
//		allbucket: [1165584, 1168167, 3424],
//		somecrayon: [1170628, 1173231, 3240],
//		nonecrayon: [1175446, 1178215, 3384],
//		allcrayon: [1180614, 1183238, 3301],
//		somedrum: [1185740, 1188200, 3137],
//		nonedrum: [1190476, 1193265, 3322],
//		alldrum: [1195582, 1198268, 3260],
//		someguitar: [1200667, 1203148, 3219],
//		noneguitar: [1205547, 1208192, 3363],
//		allguitar: [1210694, 1213174, 3240],
//		somepaintbrush: [1215697, 1218219, 3383],
//		nonepaintbrush: [1220577, 1223243, 3486],
//		allpaintbrush: [1225683, 1228246, 3506],
//		somepencil: [1230686, 1233269, 3219],
//		nonepencil: [1235566, 1238293, 3486],
//		allpencil: [1240692, 1243296, 3383],
//		somescissors: [1245577, 1248279, 3280],
//		nonescissors: [1250616, 1253302, 3342],
//		allscissors: [1255783, 1258346, 3179],
//		someteddybear: [1260807, 1263309, 3199],
//		noneteddybear: [1265605, 1268373, 3547],
//		allteddybear: [11270854, 1273397, 3322],
//		somedress: [1275816, 1278359, 3343],
//		nonedress: [1280696, 1283422, 3507],
//		alldress: [1285741, 1288426, 3465],
//		someglasses: [1290908, 1293389, 3281],
//		noneglasses: [1295706, 1298474, 3445],
//		allglasses: [1300914, 1303436, 3322],
//		somehat: [1305958, 1308480, 3158],
//		nonehat: [1310695, 1313463,3383],
//		allhat: [1315862, 1318486, 3424],
//		somemitten: [1320968, 1323428, 3239],
//		nonemitten: [1325807, 1328431, 3485],
//		allmitten: [1320851, 1333495, 3403],
//		somenecklace: [1335997, 1338478, 3343],
//		nonenecklace: [1340857, 1343523, 3465],
//		allnecklace: [1346024, 1348628, 3424],
//		somepurse: [1351109, 1353652, 3343],
//		nonepurse: [1355969,1358675,  3486],
//		allpurse: [1361136, 1363699, 3404],
//		someshirt: [1366098, 1368723, 3363],
//		noneshirt: [1370978, 1373746, 3548],
//		allshirt: [1376125, 1378729, 3383],
//		someshoe: [1381190, 1383732, 3301],
//		noneshoe: [1386049, 1388756, 3486],
//		allshoe: [1391134, 1393739, 3404],
//		someshorts: [1396137, 1398803, 3322],
//		noneshorts: [1401038, 1403826, 3547],
//		allshorts: [1406246, 1408809, 3322],
//		somesock: [1411208, 1413833, 3342],
//		nonesock: [1416027, 1418836, 3506],
//		allsock: [1421173, 1423860, 3486],
//		somewatch: [1426156, 1428800, 3342],
//		nonewatch: [1431016, 1433845, 3424],
//		allwatch: [1436285, 1438828, 3384],
//		somezipper: [1441268, 1443872, 3342],
//		nonezipper: [1446107, 1448897, 3527],
//		allzipper: [1451315, 1453981, 3424],
//		practice: [1454694, 3622]
//
//	}
//});


//array shuffle function
shuffle = function (o) { //v1.0
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


//date function - will be used in recording data
getCurrentDate = function() {
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	return (month + "/" + day + "/" + year);
}

//this could be used for RTs?
getCurrentTime = function() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();

	if (minutes < 10) minutes = "0" + minutes;
	return (hours + ":" + minutes);
}



//-------DOT GAME-----
createDot = function(dotx, doty, i, tag) {
	var dots;
	if (tag === "smiley") {
		dots = ["smiley1", "smiley2", "smiley3", "smiley4", "smiley5"];
	} else {
		dots = [1, 2, 3, 4, 5];
	}

	var dot = document.createElement("img");
	dot.setAttribute("class", "dot");
	dot.id = "dot_" + dots[i];
	if (tag === "smiley") {
		dot.src = "dots/dot_" + "smiley" + ".jpg";
	} else {
		dot.src = "dots/dot_" + dots[i] + ".jpg";
	}

	var x = Math.floor(Math.random()*950);
	var y = Math.floor(Math.random()*540);

	var invalid = "true";

	//make sure dots do not overlap
	while (true) {
		invalid = "true";
		for (j = 0; j < dotx.length ; j++) {
			if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 250) {
				var invalid = "false";
				break;
			}
		}
		if (invalid === "true") {
			dotx.push(x);
			doty.push(y);
			break;
		}
		x = Math.floor(Math.random()*400);
		y = Math.floor(Math.random()*400);
	}

	dot.setAttribute("style","position:absolute;left:"+x+"px;top:"+y+"px;");
	training.appendChild(dot);
}

var images=[];
var dots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5", "x", "dot_smiley"];
for (i = 0; i<dots.length; i++) {
	images[i] = new Image();
	images[i].src = "dots/" + dots[i] + ".jpg";
}


//------randomize trial types---------
//first, create an array of the number of quantifiers used in the study
var trialQuants = ["some", "some", "some", "some", "some",
					"some", "some", "some", "some", "some",
					"all", "all", "all", "all", "all",
					"all", "all", "all", "all", "all",
					"none", "none", "none", "none", "none",
					"none", "none", "none", "none", "none"];

//shuffle these quantifiers
//We will index this array based on our trial number: this will determine the trial type
trialQuants = shuffle(trialQuants);

//--now, experiment trials--
//keeps track of trial you're on
var numTrials = trialQuants.length;

//-----book covers------
//books are bookL, bookC, bookR (left, center, right); 
//these will be empty variables, and this array of quantifiers will be shuffled at the start of every trial to determine book type
var bookQuants = ["some", "all", "none"];

//-----items and names -----
//first, load all the images and names in the same order
var food = ["carrot", "cake", "cookie", "pizza", "apple", "banana",
			"orange", "pear", "strawberry","pretzel", "popsicle", "donut"];
var animals = ["dog", "cat", "bird", "horse", "cow", "sheep", "tiger", "lion",
			"bear", "frog", "turtle", "fish", "giraffe", "elephant", "monkey", "pig",
			"goat", "duck", "penguin", "owl", "chicken"];
var clothing = ["hat", "shoe", "necklace", "watch", "glasses", "purse", "dress", "shirt",
			"shorts", "sock", "mitten", "zipper"];
var toys = ["balloon", "book", "soccer", "pencil", "scissors", "paintbrush", "bell", "drum", "guitar",
			"boat", "bucket", "bike", "crayon", "teddybear", "block"];
var misc = ["car", "train", "firetruck", "toothbrush", "key", "comb", "plate", "cup", "spoon",
			"clock", "lamp", "phone", "flower", "butterfly", "bee", "map", "bus", "trafficlight",
			"present", "cupcake", "partyhat", "tree", "barn", "fence", "chair", "house",
			"table", "plane", "stroller", "fork"];

//shuffle these arrays
food = shuffle(food);
animals = shuffle(animals);
clothing = shuffle(clothing);
toys = shuffle(toys);
misc = shuffle(misc);

//now slice them into 3 per trial
//note that this contains ALL the items in the study - 90 total
//this is done this way to make sure that all the images stay in the same category
var trialItems = [
	food.slice(0, 3),
	food.slice(3, 6),
	food.slice(6, 9),
	food.slice(9, 12),
	animals.slice(0, 3),
	animals.slice(3, 6),
	animals.slice(6, 9),
	animals.slice(9, 12),
	animals.slice(12, 15),
	animals.slice(15, 18),
	animals.slice(18, 21),
	clothing.slice(0, 3),
	clothing.slice(3, 6),
	clothing.slice(6, 9),
	clothing.slice(9, 12),
	toys.slice(0, 3),
	toys.slice(3, 6),
	toys.slice(6, 9),
	toys.slice(9, 12),
	toys.slice(12, 15),
	misc.slice(0, 3),
	misc.slice(3, 6),
	misc.slice(6, 9),
	misc.slice(9, 12),
	misc.slice(12, 15),
	misc.slice(15, 18),
	misc.slice(18, 21),
	misc.slice(21, 24),
	misc.slice(24, 27),
	misc.slice(27, 30)
];

//now shuffle that list to randomize trials
trialItems = shuffle(trialItems);

//preloading images function
myimages = [];
function preloading() {
	for (x = 0; x < preloading.arguments.length; x++) {
		myimages[x] = new Image();
		myimages[x].src = preloading.arguments[x];
	}
}

//preload all images
preloading("images/carrot.png", "images/cake.png", "images/cookie.png", "images/pizza.png", "images/apple.png", "images/banana.png",
	"images/orange.png", "images/pear.png", "images/strawberry.png","images/pretzel.png", "images/popsicle.png", "images/donut.png",
	"images/dog.png", "images/cat.png", "images/bird.png", "images/horse.png", "images/cow.png", "images/sheep.png", "images/tiger.png",
	"images/lion.png", "images/bear.png", "images/frog.png", "images/turtle.png", "images/fish.png", "images/giraffe.png", "images/elephant.png",
	"images/monkey.png", "images/pig.png", "images/goat.png", "images/duck.png", "images/penguin.png", "images/owl.png", "images/chicken.png",
	"images/hat.png", "images/shoe.png", "images/necklace.png", "images/watch.png", "images/glasses.png", "images/purse.png", "images/dress.png",
	"images/shirt.png", "images/shorts.png", "images/sock.png", "images/mitten.png", "images/zipper.png", "images/balloon.png",
	"images/book.png", "images/soccer.png", "images/pencil.png", "images/scissors.png", "images/paintbrush.png", "images/bell.png",
	"images/drum.png", "images/guitar.png", "images/boat.png", "images/bucket.png", "images/bike.png", "images/crayon.png",
	"images/teddybear.png", "images/block.png", "images/car.png", "images/train.png", "images/firetruck.png", "images/toothbrush.png",
	"images/key.png", "images/comb.png", "images/plate.png", "images/cup.png", "images/spoon.png", "images/clock.png", "images/lamp.png",
	"images/phone.png", "images/flower.png", "images/butterfly.png", "images/bee.png", "images/map.png", "images/bus.png", "images/trafficlight.png",
	"images/present.png", "images/cupcake.png", "images/partyhat.png", "images/tree.png", "images/barn.png", "images/fence.png", "images/chair.png",
	"images/house.png", "images/table.png", "images/plane.png", "images/stroller.png", "images/fork.png", "images/background.png");


//--other parameters--
//keeps track of the number of trial you've done
var counter = 0;

//amount of white space between trials
var normalpause = 2500;



//-----------------------EXPERIMENT------------------
showSlide("instructions");

var experiment = {
	subid: "",
	//input at beginning of experiment
	trialNum: 0,
	//trial number - this is important because the trial number will be used to index array of trial type
	//what number trial you're one
	date: getCurrentDate(),
	//the date of the experiment
	timestamp: getCurrentTime(),
	prompt: "",
	//name of the item that child is queried on
	bookL: "",
	//quantifier of book 1 - left
	bookC: "",
	//quantifier of book 2 - middle
	bookR: "",
	//quantifier of book 3 - right
	bookLImgs: [],
	//items on book 1 - left
	bookCImgs: [],
	//items on book 2 - middle
	bookRImgs: [],
	//items on book 3 - right
	itemList: [],
	//the 3 items that appear in this trial
	allItems: [],
	//the name of the images for quantifier "all"
	someItems: [],
	//the name of the images for quantifier "some"
	noneItems: [],
	//the name of the images for quantifier "none"
	side: "",
	//whether the child picked the left (L), center (C), or the right (R) picture
	selectionType: "",
	//the quantifier selection child made
	response: "",
	//whether the response was the correct response (Y) or the incorrect response (N)
	//the time that the trial was completed
	reactiontime: 0,
	//TODO : add reaction time variable *****

	//the "begin" button page - moves the experiment along after dot game
	preStudy: function () {
		document.body.style.background = "white";
		$("#prestudy").hide();
		setTimeout(function () {
			experiment.train();
		}, normalpause);
	},

	//dotgame
	training: function (dotgame) {
		var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5",
			"dot_smiley1", "dot_smiley2", "dot_smiley3",
			"dot_smiley4", "dot_smiley5"];
		var xcounter = 0;
		var dotCount = 5;

		var dotx = [];
		var doty = [];

		if (dotgame === 0) {
			for (i = 0; i < dotCount; i++) {
				createDot(dotx, doty, i, "");
			}
		} else {
			for (i = 0; i < dotCount; i++) {
				createDot(dotx, doty, i, "smiley");
			}
		}
		showSlide("training");
		$('.dot').bind('click touchstart', function (event) {
			var dotID = $(event.currentTarget).attr('id');

			//only count towards completion clicks on dots that have not yet been clicked
			if (allDots.indexOf(dotID) === -1) {
				return;
			}
			allDots.splice(allDots.indexOf(dotID), 1);
			document.getElementById(dotID).src = "dots/x.jpg";
			xcounter++
			if (xcounter === dotCount) {
				setTimeout(function () {
					$("#training").hide();
					if (dotgame === 0) {
						//hide old x marks before game begins again
						var dotID;
						for (i = 1; i <= dotCount; i++) {
							dotID = "dot_" + i;
							training.removeChild(document.getElementById(dotID));
						}
						experiment.training();
						dotgame++;
					} else {
						//document.body.style.background = "black";
						setTimeout(function () {
							showSlide("prestudy");
							//experiment.test();
						}, normalpause * 2);
					}
				}, normalpause * 2);
			}
		});
	},

	//checks the input information to make sure it's accurate
	checkInput: function () {
		//subject ID
		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">You must input a subject ID</font>');
			return;
		}
		experiment.subid = document.getElementById("subjectID").value;
		experiment.training(0);

	},

	//the end of the experiment, where the background becomes completely black
	end: function () {
		setTimeout(function () {
			$("#stage").fadeOut();
		}, normalpause);
		showSlide("end");
	},

	repeat: function() {
		sound.play(wordList);
	},


	//one practice trial; if child gets it incorrect, repeat the trial
	train: function () {
		$("#stage1").hide();
		$("#continue1").hide();
		$("#practice_correct").hide();
		$(document).ready(function() {
			$('body').css('background-image', 'images/background.png');
		});


		practiceCounter = 0;
		practiceSide = "";
		practiceCorrect = "";

		//var currentTime = (new Date()).getTime();
		//if (currentTime > (practiceTime + 1000)) {
		//	sound.play('practice');
		//}
		//else {
		//	return;
		//}

		//sound.play('silence');
		//sound.play('silence');
		//sound.play('practice');

		wordList = ('practice');
		setTimeout(function(){
			sound.play(wordList);
		}, 2000);



		$("#stage1").fadeIn();

		//get the response

		var clickDisabled = true;
		setTimeout(function() {clickDisabled = false;}, (time.clip.practice[1])+1000);
		//setTimeout(function() {clickDisabled = false;}, (spriteData[wordList].onset - spriteData[wordList].start)*1000 + 300);
		//this will be enabled after the audio is done playing
		$('.pic').bind('click touchstart', function(event) {
			if (clickDisabled) return;

			//disable subsequent clicks once the participant has made their choice
			clickDisabled = true;

			//time the participant clicked - the time the audio began - the amount of time between the beginning of the audio and the
			//onset of the word
			//commented now until the audio data is ready
			//experiment.reactiontime = (new Date()).getTime() - startTime - (spriteData[wordList].onset - spriteData[wordList].begin)*1000;

			//which book was selected?
			var picID = $(event.currentTarget).attr('id');
			if (picID === "leftbookpractice") {
				practiceSide = "L";
				practiceCorrect = "N";
			} else if (picID === "centerbookpractice") {
				practiceSide = "C";
				practiceCorrect = "Y";
				$("#practice_correct").show();
				$("#continue1").show();
				practiceCounter++;
			} else {
				practiceSide = "R";
				practiceCorrect = "N";
			}


				setTimeout(function () {
					//there are no more trials for the experiment to run
					if (practiceCounter === 0) {
						experiment.train();
					}
					setTimeout(function() {clickDisabled = false;}, (time.clip.practice[1]));

				}, normalpause);
		});
	},


	//main test trials - 30 trials
	test: function() {
		$("#stage1").hide();
		$("#stage").hide();
		$("#continue").hide();
		$("#continue1").hide();
		$("#left_correct").hide();
		$("#center_correct").hide();
		$("#right_correct").hide()
		$(document).ready(function() {
			$('body').css('background-image', 'images/background.png');
		});

		//reset selection type
		experiment.selectionType = "";

		//determines the trial type of this trial
		//this is indexing the quantifier with the trial number
		trialType = trialQuants[experiment.trialNum];

		//determines which quantifier is assigned to which book
		//this happens in every trial
		bookQuants = shuffle(bookQuants);
		bookL = bookQuants[0];
		bookC = bookQuants[1];
		bookR = bookQuants[2];

		//get the trial names for this trial - we are referencing this with the number of the trial we're on
		itemList = trialItems[experiment.trialNum];

		//here we are determining the item queried (prompt) in each trial
		//note that this is for only all, none, and ambig. 'some' trials
		experiment.prompt = itemList[0];
		//audioSprite.play();
		//audioSprite.pause();

		//get the words to play in this trial
		wordList = (trialType + experiment.prompt);


		//This is assigning the books the particular images based on their quantifiers
		//this creates an array of four items

		//book left
		if (bookL == "all") {
			bookLImgs = [itemList[0], itemList[0], itemList[0], itemList[0]];
			allItems = bookLImgs;
		} else if (bookL == "some") {
			bookLImgs = shuffle([itemList[0], itemList[0], itemList[1], itemList[1]]);
			someItems = bookLImgs;
		} else {
			bookLImgs = [itemList[2], itemList[2], itemList[2], itemList[2]];
			noneItems = bookLImgs;
		}
		//book center
		if (bookC == "all") {
			bookCImgs = [itemList[0], itemList[0], itemList[0], itemList[0]];
			allItems = bookCImgs;
		} else if (bookC == "some") {
			bookCImgs = shuffle([itemList[0], itemList[0], itemList[1], itemList[1]]);
			someItems = bookCImgs;
		} else {
			bookCImgs = [itemList[2], itemList[2], itemList[2], itemList[2]];
			noneItems = bookCImgs;
		}
		//book right
		if (bookR == "all") {
			bookRImgs = [itemList[0], itemList[0], itemList[0], itemList[0]];
			allItems = bookRImgs;
		} else if (bookR == "some") {
			bookRImgs = shuffle([itemList[0], itemList[0], itemList[1], itemList[1]]);
			someItems = bookRImgs;
		} else {
			bookRImgs = [itemList[2], itemList[2], itemList[2], itemList[2]];
			noneItems = bookRImgs;
		}

		bookLitem = [];
		//actual file names of the images displayed on left book
		bookCitem = [];
		//files names of the images displayed on center book
		bookRitem = [];
		//file names of images displayed on right book

		//This is getting the file names for the actual images
		//this results in an array of four image paths
		for (i = 0; i < bookLImgs.length; i++) {
			bookLitem.push("images/" + bookLImgs[i] + ".png");
		}
		for (i = 0; i < bookCImgs.length; i++) {
			bookCitem.push("images/" + bookCImgs[i] + ".png");
		}
		for (i = 0; i < bookRImgs.length; i++) {
			bookRitem.push("images/" + bookRImgs[i] + ".png");
		}


		//now we are going to build the table in HTML
		//this part takes the item names above, and, writes HTML script to show the images
		var objects_html = "";
		objects_html += '<table align = "center" table id = "leftbook" cellpadding="5"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id= "leftbook1" img src="src"/>';
		objects_html += '<td align="center"><img class="pic" id="leftbook2" img src="src2"/>';
		objects_html += '</td>';
		objects_html += '</tr><tr>';
		objects_html += '<td align="center"><img class="pic" id= "leftbook3" img src="src7"/>';
		objects_html += '<td align="center"><img class="pic" id="leftbook4" img src="src8"/>';
		objects_html += '</tr></table>';

		objects_html += '<table align = "center" table id = "centerbook" cellpadding="5"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="centerbook1" img src="src3"/>';
		objects_html += '<td align="center"><img class="pic" id="centerbook2" img src="src4">';
		objects_html += '</td>';
		objects_html += '</tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="centerbook3" img src="src9"/>';
		objects_html += '<td align="center"><img class="pic" id="centerbook4" img src="src10">';
		objects_html += '</tr></table>';

		objects_html += '<table align = "center" table id = "rightbook" cellpadding="5"><tr></tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="rightbook1" img src="src5"/>';
		objects_html += '<td align="center"><img class="pic" id="rightbook2" img src="src6"/>';
		objects_html += '</td>';
		objects_html += '</tr><tr>';
		objects_html += '<td align="center"><img class="pic" id="rightbook3" img src="src11"/>';
		objects_html += '<td align="center"><img class="pic" id="rightbook4" img src="src12"/>';
		objects_html += '</tr></table>';
		$("#objects").html(objects_html);


		//show the correct images
		//left book 1
		$("#leftbook1").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src"]').attr('src', bookLitem[0]);
		//left book 2
		$("#leftbook2").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src2"]').attr('src', bookLitem[1]);
		//center book 1
		$("#centerbook1").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src3"]').attr('src', bookCitem[0]);
		//center book 2
		$("#centerbook2").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src4"]').attr('src', bookCitem[1]);
		//right book 1
		$("#rightbook1").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src5"]').attr('src', bookRitem[0]);
		//right book 2
		$("#rightbook2").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src6"]').attr('src', bookRitem[1]);

		//left book 3
		$("#leftbook3").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src7"]').attr('src', bookLitem[2]);
		//left book 4
		$("#leftbook2").attr("name", bookLImgs);
		$("[name='bookLitem']").attr("src", bookLitem);
		$('img[src="src8"]').attr('src', bookLitem[3]);
		//center book 3
		$("#centerbook1").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src9"]').attr('src', bookCitem[2]);
		//center book 4
		$("#centerbook2").attr("name", bookCImgs);
		$("[name='bookCitem']").attr("src", bookCitem);
		$('img[src="src10"]').attr('src', bookCitem[3]);
		//right book 3
		$("#rightbook1").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src11"]').attr('src', bookRitem[2]);
		//right book 4
		$("#rightbook2").attr("name", bookRImgs);
		$("[name='bookRitem']").attr("src", bookRitem);
		$('img[src="src12"]').attr('src', bookRitem[3]);

		$("#stage").fadeIn();

		var startTime = (new Date()).getTime();
		word = wordList;
		setTimeout(function(){
			sound.play(wordList);
		}, 2000);
		begin = [time.clip[word][0]];
		onset = [time.clip[word][1]];


		var clickDisabled = true;
		setTimeout(function() {clickDisabled = false;}, (onset-begin)+2000);
		//this will be enabled after the audio is done playing
		$('.pic').bind('click touchstart', function(event) {
			if (clickDisabled) return;
			var responseTime = (new Date()).getTime();
			////disable subsequent clicks once the participant has made their choice
			//clickDisabled = true;
			//reaction time - time elapsed since the beginning on the audio and the onset of the word
			experiment.reactiontime = ((responseTime - startTime) - (onset-begin)-2000);
			

			//which book was selected?
			var picID = $(event.currentTarget).attr('id');
			if (picID === "leftbook1" || picID === "leftbook2" || picID === "leftbook3" || picID === "leftbook4") {
				picname = picID;
				experiment.side = "L";
				experiment.selectionType += bookL;
				$("#left_correct").show();
				$("#continue").show();
				$('#rightbook1').unbind("click touchstart");
				$('#rightbook2').unbind("click touchstart");
				$('#rightbook3').unbind("click touchstart");
				$('#rightbook4').unbind("click touchstart");
				$('#centerbook1').unbind("click touchstart");
				$('#centerbook2').unbind("click touchstart");
				$('#centerbook3').unbind("click touchstart");
				$('#centerbook4').unbind("click touchstart");
			} else if (picID === "centerbook1" || picID === "centerbook2" || picID === "centerbook3" || picID === "centerbook4") {
				experiment.side = "C";
				experiment.selectionType += bookC;
				$("#center_correct").show();
				$("#continue").show();
				$('#rightbook1').unbind("click touchstart");
				$('#rightbook2').unbind("click touchstart");
				$('#rightbook3').unbind("click touchstart");
				$('#rightbook4').unbind("click touchstart");
				$('#leftbook1').unbind("click touchstart");
				$('#leftbook2').unbind("click touchstart");
				$('#leftbook3').unbind("click touchstart");
				$('#leftbook4').unbind("click touchstart");
			} else {
				experiment.side = "R";
				experiment.selectionType += bookR;
				$("#right_correct").show();
				$("#continue").show();
				$('#centerbook1').unbind("click touchstart");
				$('#centerbook2').unbind("click touchstart");
				$('#centerbook3').unbind("click touchstart");
				$('#centerbook4').unbind("click touchstart");
				$('#leftbook1').unbind("click stouchstart");
				$('#leftbook2').unbind("click touchstart");
				$('#leftbook3').unbind("click touchstart");
				$('#leftbook4').unbind("click touchstart");
			}

			//check if the child got the trial correct
			if (experiment.selectionType === trialType) {
				experiment.response = "Y";
			} else {
				experiment.response = "N";
			}


			counter++;
			experiment.trialNum = counter;

			experiment.processOneRow();


			//set the timeout
			setTimeout(function () {
				//there are no more trials for the experiment to run
				if (counter == numTrials) {
					experiment.end();
				}
				setTimeout(function() {clickDisabled = false;}, (onset-begin));
			}, normalpause);
		});
	},

	//concatenates all experimental variables into a string which represents one "row" of data in the eventual csv
	processOneRow: function() {
		var dataForTrial = experiment.subid;
		dataForTrial += "," + experiment.trialNum + "," + experiment.date + "," + experiment.timestamp + ","+ experiment.prompt + "," + trialType + "," + experiment.reactiontime;
		dataForTrial += "," + bookL + "," + bookC + "," + bookR + "," + wordList;
		dataForTrial += "," + bookLitem + "," + bookCitem + "," + bookRitem + "," + allItems;
		dataForTrial += "," + someItems + "," + noneItems + "," + itemList + "," + experiment.side + "," + experiment.response + "," + experiment.selectionType + "\n";
		$.post("https://langcog.stanford.edu/cgi-bin/SI_tablet/tabletstudysave.php", {postresult_string : dataForTrial});
	},
}
