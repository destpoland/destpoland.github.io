var test = 0;
( () => {
    "use strict";
    var e, t = {
        291: (e, t, i) => {
            var s;
            i(260),
            function(e) {
                e.thin = "Thin",
                e.light = "Light",
                e.regular = "Regular",
                e.bold = "Bold",
                e.black = "Black"
            }(s || (s = {}));
            class a extends Phaser.Scene {
                constructor(e) {
                    super(e),
                    this.weights = {
                        thin: s.thin,
                        light: s.light,
                        regular: s.regular,
                        bold: s.bold,
                        black: s.black
                    }
                }
                fade(e, t, i) {
                    let s = Phaser.Display.Color.ColorToRGBA(i);
                    this.cameras.main.fadeEffect.start(e, t, s.r, s.g, s.b)
                }
                flash(e, t=16777215) {
                    let i = Phaser.Display.Color.ColorToRGBA(t);
                    this.cameras.main.flashEffect.start(e, i.r, i.g, i.b)
                }
                addEvent(e, t, i=this) {
                    return this.time.addEvent({
                        delay: e,
                        callback: t,
                        callbackScope: i
                    })
                }
                createText(e=0, t=0, i=20, a=s.regular, r="#FFF", h="") {
                    return this.add.text(e, t, h, {
                        fontFamily: "Lato" + a,
                        fontSize: Math.max(i, 1) + "px",
                        color: r
                    }).setLineSpacing(.4 * i)
                }
                fitToScreen(e) {
                    e.setScale(Math.max(this.W / e.width, this.H / e.height))
                }
                containToScreen(e) {
                    e.setScale(Math.min(this.W / e.width, this.H / e.height))
                }
                get W() {
                    return this.cameras.main.displayWidth
                }
                get H() {
                    return this.cameras.main.displayHeight
                }
                get CX() {
                    return this.cameras.main.centerX
                }
                get CY() {
                    return this.cameras.main.centerY
                }
            }
            const r = [{
                key: "cell",
                path: i.p + "342d3bf13b7b6cd41b8f11aeeeab4c79.png"
            }, {
                key: "checkmark",
                path: i.p + "10fc76bf38289e7a4f52499e91e32e8f.png"
            }, {
                key: "checkmark_inv",
                path: i.p + "9cc96270756e166e8172919138cefd17.png"
            }, {
                key: "tall_grass_1",
                path: i.p + "a00f88a4472b140a4cade5dbc60e766b.png"
            }, {
                key: "tall_grass_2",
                path: i.p + "7bfe24e3c6ec989d5012d3b328b9c698.png"
            }, {
                key: "tall_grass_3",
                path: i.p + "72be100ad9f0df1e1787b8208f279a46.png"
            }, {
                key: "boxes",
                path: i.p + "7d6fab1049043af712b860771c2a9e1e.png"
            }, {
                key: "bolt",
                path: i.p + "0986de84f5c11050917f720727638520.png"
            }, {
                key: "selection",
                path: i.p + "daed29a4752bcee890d46e9a3f5d5b3e.png"
            }, {
                key: "arrow",
                path: i.p + "c4cfa151b397dfebecb02d5caecca095.png"
            }, {
                key: "settings",
                path: i.p + "9d129babfa9d58f87e82f8645790ecf2.png"
            }, {
                key: "gymleadernotes",
                path: i.p + "7491ee3b07ce4db65a6afa158f0b0579.png"
            }]
              , h = [{
                key: "bulbasaur_1",
                path: i.p + "5f67956689b8f3fc65b394468bf7ca25.png"
            }, {
                key: "bulbasaur_2",
                path: i.p + "f6d3db6fac0af690182556ea34e53474.png"
            }, {
                key: "bulbasaur_3",
                path: i.p + "dd8bbf936a971f26b55aa799ae13b9b8.png"
            }, {
                key: "bulbasaur_4",
                path: i.p + "e95475ae792ac9bbdc954368b8f802eb.png"
            }, {
                key: "charmander_1",
                path: i.p + "b705fe85dcc76960d2f64bdf8e612db1.png"
            }, {
                key: "charmander_2",
                path: i.p + "8b2c23afc611cfcabb028604fb90d400.png"
            }, {
                key: "charmander_3",
                path: i.p + "0de4520ac24e53b779b98e8a220d455a.png"
            }, {
                key: "charmander_4",
                path: i.p + "b498b04b6f0f850e64f49f7f567a7d2d.png"
            }, {
                key: "charmander_5",
                path: i.p + "20f693c8206538cbc32cf6d11ede478f.png"
            }, {
                key: "squirtle_1",
                path: i.p + "22b3b818e8b2e9c6cec6be11d5e706b2.png"
            }, {
                key: "squirtle_2",
                path: i.p + "d9258ba42b455887483cdff8e9ee92f8.png"
            }, {
                key: "squirtle_3",
                path: i.p + "ca9da424b82b80bf121baf40ea60a412.png"
            }, {
                key: "squirtle_4",
                path: i.p + "1f05cbe7221adc9d426559561d51515f.png"
            }, {
                key: "legendary_1",
                path: i.p + "8f797cf317eb5d1b4052ccf4d73aaa3f.png"
            }, {
                key: "legendary_2",
                path: i.p + "7f299d0a6d9cd09451d77584e3f7c278.png"
            }, {
                key: "legendary_3",
                path: i.p + "a47daf5f8f8ffff9b42cb37632cb24ac.png"
            }, {
                key: "legendary_4",
                path: i.p + "71586993d06e07a2dc189a61db5d3623.png"
            }, {
                key: "legendary_5",
                path: i.p + "2100cf752113f742223102572507f54c.png"
            }, {
                key: "legendary_6",
                path: i.p + "7ffe52fc89562c765782465f3dd0effe.png"
            }, {
                key: "legendary_7",
                path: i.p + "976d2e3fc70502b573034915813e8d4a.png"
            }, {
                key: "legendary_8",
                path: i.p + "0c59c9d5686fd9db9f6c240186fb05dd.png"
            }, {
                key: "legendary_9",
                path: i.p + "cea281d6c03e9faf8867ed8d5d4dafcf.png"
            }, {
                key: "legendary_10",
                path: i.p + "60f66973695890e6495df913e7de6697.png"
            }, {
                key: "legendary_11",
                path: i.p + "5e456b0faf2f9a9720f8740227a99386.png"
            }, {
                key: "legendary_12",
                path: i.p + "84cf0576422d93564ce4ee55dd801898.png"
            }, {
                key: "legendary_13",
                path: i.p + "47c0e949e9d8ecd220d040670c81a2bd.png"
            }, {
                key: "legendary_14",
                path: i.p + "e2463bdc4de55df40c776e84783d20fe.png"
            }, {
                key: "unown_28",
                path: i.p + "687beabfb1ce94c5d5ce866e0e474848.png"
            }]
              , o = [{
                key: "trainerTips",
                path: i.p + "6a211d7a5202087c5cefa874e5e9f4d6.png"
            }, {
                key: "pokeMartSign",
                path: i.p + "0a681a7800fdd07840f9f86513d108c8.png"
            }, {
                key: "pokeMartShelves",
                path: i.p + "b30b9821e907a561c7dbac51788152a8.png"
            }, {
                key: "pokeMartDP",
                path: i.p + "cfb599db589458380487e777e890f674.png"
            }, {
                key: "pokeMartHGSS",
                path: i.p + "7feb69acc62d7f34ff1cf534f7b81679.png"
            }, {
                key: "kantoPokemonGyms",
                path: i.p + "244df3208c8c3a5a39f18485cb0975a0.png"
            }, {
                key: "celadonStore",
                path: i.p + "aefdc6e66b41bb838dcac66c3fd2b9b8.png"
            }, {
                key: "goldenrodStore",
                path: i.p + "1ec2a11844eb3b91de38ed4ee662ca37.png"
            }, {
                key: "silphCo",
                path: i.p + "4237feb9c8654b15cfd7cb710ef492b9.png"
            }, {
                key: "foreignBuilding",
                path: i.p + "a41b6ae156b58b3041bdfdb01f8256c3.png"
            }]
              , n = [{
                key: "cherishBall",
                path: i.p + "19282442d00a66558ff5aaa045753ca7.png"
            }, {
                key: "customPokeBall",
                path: i.p + "f7c5114d9289cf8c168f533b9da2024f.png"
            }, {
                key: "diveBall",
                path: i.p + "faa6384e43380ded45c515d9f5d2e1c8.png"
            }, {
                key: "drasilBall",
                path: i.p + "93125db7fc85ac5b407a19cd98756963.png"
            }, {
                key: "dreamBall",
                path: i.p + "d01c26df4d71fde28c34b3695ca22181.png"
            }, {
                key: "duskBall",
                path: i.p + "8f925091ba4def5cec346dc53ad0f42e.png"
            }, {
                key: "fastBall",
                path: i.p + "c45abe751c79beb729e9f78461d5481f.png"
            }, {
                key: "friendBall",
                path: i.p + "1da81f3704c7ee345885f01ecab809f1.png"
            }, {
                key: "glaceBall",
                path: i.p + "7df9ccc5a2cfa261f293b275028dd723.png"
            }, {
                key: "greatBall",
                path: i.p + "5c10c752062277ffb09dbd995f4ea0a4.png"
            }, {
                key: "gSBall",
                path: i.p + "0bd6dd4db2e0ccf28fb19496e6836473.png"
            }, {
                key: "healBall",
                path: i.p + "03e61be7875f54133febf85e8e9afc07.png"
            }, {
                key: "heavyBall",
                path: i.p + "30f373420078a73972c7421dc4192ff4.png"
            }, {
                key: "levelBall",
                path: i.p + "2eb90de8cd8a8c147efaae1778265992.png"
            }, {
                key: "loveBall",
                path: i.p + "3263c71cc67697300fbd9a25d966c64a.png"
            }, {
                key: "lunarBall",
                path: i.p + "39390b57eee8e0eb546e3ac426a3b40f.png"
            }, {
                key: "lureBall",
                path: i.p + "a2d4a54eb2bdeef3da66573a10d77651.png"
            }, {
                key: "luxuryBall",
                path: i.p + "960b0468b5ecdf7c27f13619fc6b09b5.png"
            }, {
                key: "masterBall",
                path: i.p + "996106d4ec4a1ec4a89341b67c939235.png"
            }, {
                key: "moonBall",
                path: i.p + "37394206f4b06daf899935758182ca60.png"
            }, {
                key: "nestBall",
                path: i.p + "7cc6ae55906300c137d299551384027e.png"
            }, {
                key: "netBall",
                path: i.p + "b56766f17565d80dfc863de3bbd9929e.png"
            }, {
                key: "johtoParkBall",
                path: i.p + "56ddc0bf2d7becb378715b3a8e26060d.png"
            }, {
                key: "palParkParkBall",
                path: i.p + "f2c6e71d89f260c44df384f96337a6fb.png"
            }, {
                key: "pokeBall",
                path: i.p + "33ca4997bd9e3c643d4410304048abf5.png"
            }, {
                key: "premierBall",
                path: i.p + "3a2c2928315874ca18b0de134ae2f037.png"
            }, {
                key: "quickBall",
                path: i.p + "0deab5e199c8c89c247b742db2946f41.png"
            }, {
                key: "repeatBall",
                path: i.p + "b1a61d2b2fa063711f4d26d6b8f069bd.png"
            }, {
                key: "safariBall",
                path: i.p + "c42d826fa726a90e98de14080afdc7e5.png"
            }, {
                key: "sportBall",
                path: i.p + "f423b947fecd9ea5cba27506725fa490.png"
            }, {
                key: "timerBall",
                path: i.p + "c8a21ab365152e47657e6a897fc6a778.png"
            }, {
                key: "ultraBall",
                path: i.p + "1959cada31e5bd9776690e36988bef4e.png"
            }]
              , c = [{
                key: "antidote",
                path: i.p + "3e4e1c90543c00fd01dd82d5b06fcece.png"
            }, {
                key: "awakening",
                path: i.p + "d9bf631bcfa8f29e8c920b879f9860b9.png"
            }, {
                key: "burnHeal",
                path: i.p + "059fb5629185ccfb855b1464e1682c4a.png"
            }, {
                key: "elixir",
                path: i.p + "47f6ab49b33248d7eb62a0c44d8370f7.png"
            }, {
                key: "ether",
                path: i.p + "29c7e50778505b4f833a39da0542bda8.png"
            }, {
                key: "fullHeal",
                path: i.p + "0e439accca5f82015276805c202ac96b.png"
            }, {
                key: "fullRestore",
                path: i.p + "1af0e6b118e31a16f1c1cb67aacd5de2.png"
            }, {
                key: "hyperPotion",
                path: i.p + "052f4c3faa2cda1fc38b381a492a5648.png"
            }, {
                key: "iceHeal",
                path: i.p + "979aeb799015a04079e5bea12bdb0110.png"
            }, {
                key: "maxElixir",
                path: i.p + "5472059c75a366ad4f79b79739400c4d.png"
            }, {
                key: "maxEther",
                path: i.p + "4d54348ba82d24afc87945597b6d66c7.png"
            }, {
                key: "maxPotion",
                path: i.p + "2349ab149b312b69bede094ea75901ff.png"
            }, {
                key: "maxRevive",
                path: i.p + "fa102b0b798af1cef0128ece933bf049.png"
            }, {
                key: "paralyzeHeal",
                path: i.p + "e5e9d1b94f993d55268a22222b1c164e.png"
            }, {
                key: "potion",
                path: i.p + "3e4869861b64c53dda8d4df7dbb4dc84.png"
            }, {
                key: "revive",
                path: i.p + "5698a45aff22e42ff35bee2f9e7ee3fd.png"
            }, {
                key: "superPotion",
                path: i.p + "291c06d5188429557f8e63de63f589fc.png"
            }, {
                key: "direHit",
                path: i.p + "9b6897c3e4370a3e9de295c9276c041c.png"
            }, {
                key: "honey",
                path: i.p + "0ffefc4ca7613511b14f4debb2bcc1d0.png"
            }]
              , l = [{
                key: "dirtPile",
                path: i.p + "69be95588f7b918b9e3a9a2f42fb2f7f.png"
            }, {
                key: "coalSlabs",
                path: i.p + "1c032cfc15910ce8d2752bda16ba1bbd.png"
            }, {
                key: "rock",
                path: i.p + "6179494725749931caccc5b407c5d50c.png"
            }, {
                key: "pokemonRock",
                path: i.p + "b07b06e957c953f94b21b58e1699e463.png"
            }, {
                key: "tomb",
                path: i.p + "6e9d95d960f2074637b2a6894b7a51e7.png"
            }, {
                key: "relicCastle",
                path: i.p + "180c2ed585f98e45bb41bd0274f84ff6.png"
            }, {
                key: "spearPillarRuins",
                path: i.p + "5f9c50e9d6e5c0bf423464cda46ca229.png"
            }, {
                key: "ruinsOfAlph",
                path: i.p + "3b5125503596442be44571acdadac505.png"
            }, {
                key: "snowpointTemple",
                path: i.p + "80d49a9baa9e3ce7af5d1b606e1573e7.png"
            }, {
                key: "amitySquareRuins",
                path: i.p + "8a6835f3e4bed62f27b8ec14c5ab133c.png"
            }]
              , g = [{
                key: "rareBone",
                path: i.p + "fd6c78e0cd2efdb42d6cceccde3466a6.png"
            }, {
                key: "domeFossil",
                path: i.p + "50961c8d2d854e0cb1e982a7ee469497.png"
            }, {
                key: "helixFossil",
                path: i.p + "e71bd0c8bb588ba1e8c7a426865b302e.png"
            }, {
                key: "oldAmber",
                path: i.p + "0067fa395e133005acab4bc6d661b7e4.png"
            }, {
                key: "rootFossil",
                path: i.p + "b3136753ddc4ada246358b3298c1b4db.png"
            }, {
                key: "clawFossil",
                path: i.p + "29f636ef61b84a4105eaad2a08d05ce9.png"
            }, {
                key: "skullFossil",
                path: i.p + "1ba1e97dc9b35c75387cff2f3f21d75a.png"
            }, {
                key: "armorFossil",
                path: i.p + "249f0a38b2c1a8ff898a7496de9a50f9.png"
            }, {
                key: "coverFossil",
                path: i.p + "ac79c8f48642a82f9f32eeb71e8f08dd.png"
            }, {
                key: "plumeFossil",
                path: i.p + "79a6796fcbfea5fa36039b2622f48fee.png"
            }, {
                key: "jawFossil",
                path: i.p + "504c68313f73c34fa0d8b691c9b3649b.png"
            }, {
                key: "sailFossil",
                path: i.p + "3081c674698debc42a555a4d87d15345.png"
            }]
              , d = [{
                key: "fireStone",
                path: i.p + "6c210c23384968d2edcce49856fa6631.png"
            }, {
                key: "waterStone",
                path: i.p + "fbfd5229b6bed2c35294f38a9555541c.png"
            }, {
                key: "thunderStone",
                path: i.p + "116f094457e31e1e499dc43bcd6b181c.png"
            }, {
                key: "leafStone",
                path: i.p + "8c98ee96b3bc90431e2c8eb3fb967d24.png"
            }, {
                key: "moonStone",
                path: i.p + "dec3655a702b31ca208e991e7a7b4966.png"
            }, {
                key: "sunStone",
                path: i.p + "7374d026105cb33980f75141ba678210.png"
            }, {
                key: "shinyStone",
                path: i.p + "ec414ea33ca7db8a3f5d117a8e628feb.png"
            }, {
                key: "duskStone",
                path: i.p + "71696176da2f8e7bb354bcf26c30e304.png"
            }, {
                key: "dawnStone",
                path: i.p + "bd96c611b92bcc161d85c1673f72df82.png"
            }, {
                key: "iceStone",
                path: i.p + "e948951fdb7993be301e8074c31cffe2.png"
            }]
              , p = [{
                key: "bricks",
                path: i.p + "03892219eedb340b6df5088aaa5b40e1.png"
            }, {
                key: "girders",
                path: i.p + "f6367319a408e6a9054f1df0dd81029e.png"
            }, {
                key: "drums",
                path: i.p + "09c0d5c10d007c7415ccc1d0b85dbb6a.png"
            }, {
                key: "miningVehicles",
                path: i.p + "d35c31c6a9cffc565f4066ca747ec656.png"
            }, {
                key: "greatMarshTrain",
                path: i.p + "99e0ce1de9ad6ed5c0ae9510f079866d.png"
            }, {
                key: "snowpointCrane",
                path: i.p + "d5bb66f0104ca9c43bd6421b33365e93.png"
            }, {
                key: "driftveilCrane",
                path: i.p + "bb259bc83fdd75bbdc08febc3cb85097.png"
            }, {
                key: "fuegoIronworks",
                path: i.p + "1d1ffe53408894454777646aae2b8413.png"
            }, {
                key: "kantoPowerPlant",
                path: i.p + "90efdb50f77e157c32e77d3f7580a401.png"
            }]
              , y = [{
                key: "vendingDP",
                path: i.p + "20d396c3232d71d854f66b3a63e4a004.png"
            }, {
                key: "vendingBW",
                path: i.p + "f2e45eb0335ed059366dd7fda22eaad2.png"
            }, {
                key: "vendingORAS",
                path: i.p + "163d781c88a8f6f40c589c17db7a5aa7.png"
            }]
              , m = [{
                key: "freshWater",
                path: i.p + "e45c34d4721fd4bddd5f96e2175bc844.png"
            }, {
                key: "sodaPop",
                path: i.p + "c999add65ae450da94d6885922d519f8.png"
            }, {
                key: "lemonade",
                path: i.p + "3931bde0b8b6876dd18cce4fbbe25d55.png"
            }, {
                key: "moomooMilk",
                path: i.p + "e65038f314e2cb0601283fb1d9c2988a.png"
            }, {
                key: "berryJuice",
                path: i.p + "eb3530a9efb05bce2c57030790c7a19d.png"
            }, {
                key: "criticalHerbTea",
                path: i.p + "6641d7a3aae0a980725766469dbfac63.png"
            }, {
                key: "boostJuice",
                path: i.p + "f58df328b62de98c1b8da59db9270b58.png"
            }]
              , k = i.p + "85b80a0baa8aff0816d948e6bdbfee05.png"
              , u = i.p + "6e62c69a88bd56398bfee75aba26312f.png"
              , f = i.p + "a217982e881f6468f70d3579d2f68d1e.png"
              , b = i.p + "d529df87fa050dbb5a1527c7a6078f27.png"
              , w = i.p + "fe7bf5853e5394ef57aa123f1d4a55b8.png"
              , S = i.p + "6b7845b1b1dab45e987de8e1c310c128.png"
              , x = [{
                key: "pokedex",
                path: k
            }, {
                key: "pc",
                path: u
            }, {
                key: "tent",
                path: f
            }, {
                key: "centerDP",
                path: i.p + "8773d585bf7554eb433612988e8addad.png"
            }, {
                key: "centerHGSS",
                path: S
            }, {
                key: "johtoGym",
                path: b
            }, {
                key: "centerBW",
                path: i.p + "ec99d524388d9d42d9d90eb14a68dd6d.png"
            }, {
                key: "vermilionPort",
                path: i.p + "7b114d88590ba0e74fc087793b930cfe.png"
            }, {
                key: "pokemonLeague",
                path: w
            }]
              , v = [{
                key: "dampRock",
                path: i.p + "b06ac6c07308bc24e2c7d50c99f2f6ed.png"
            }, {
                key: "heatRock",
                path: i.p + "e386063cefb7ad0d298d758d0fcb41eb.png"
            }, {
                key: "icyRock",
                path: i.p + "5b577ddef56e9b739e484df79e0eff93.png"
            }, {
                key: "smoothRock",
                path: i.p + "f32755da4007aa28f622d1053c770400.png"
            }]
              , T = [{
                key: "bigMalasada",
                path: i.p + "030fd367b12156912aa3372b3cce2d5b.png"
            }, {
                key: "bigMushroom",
                path: i.p + "e09f1b9d1b764738d74ab8de941e72e2.png"
            }, {
                key: "bigRoot",
                path: i.p + "74db2a602a52cfed605fb640109d6099.png"
            }, {
                key: "energyRoot",
                path: i.p + "5b1ba586f94be7df3392db550dbf0e36.png"
            }, {
                key: "lavaCookie",
                path: i.p + "a85031613ac79909409c1e868b7649c9.png"
            }, {
                key: "leftovers",
                path: i.p + "d9cc4563494a2a8045f6ba2764370ea8.png"
            }, {
                key: "rareCandy",
                path: i.p + "be7369d3ee2318a3f89bb2a5097e5846.png"
            }, {
                key: "tinyMushroom",
                path: i.p + "0f859b352df4b89085caf36853c65e09.png"
            }, {
                key: "absorbBulb",
                path: i.p + "cebf0800132ed5e054f16de4dec159b5.png"
            }]
              , _ = [{
                key: "whiteGift",
                path: i.p + "514e895047da8240692f3c798db3d1d3.png"
            }, {
                key: "yellowGift",
                path: i.p + "a7a649642f2f5bcdedc84ea8524bf918.png"
            }, {
                key: "chest_1",
                path: i.p + "dea17a992d6775182721cfa563da5599.png"
            }, {
                key: "chest_2",
                path: i.p + "be2c14b12bf310cbc5137620898bf2fa.png"
            }, {
                key: "chest_3",
                path: i.p + "bee43fa36b916aeed8b021b1a03152f1.png"
            }]
              , C = [{
                key: "soothingCrystal",
                path: i.p + "6af248456ee52503907a573840f1f141.png"
            }, {
                key: "greatSoothingCrystal",
                path: i.p + "ed74335670695acbaaa5805a81a3aa1d.png"
            }, {
                key: "ultraSoothingCrystal",
                path: i.p + "81ab8973f5678e9f37bc16caffc40e68.png"
            }, {
                key: "soothingStone",
                path: i.p + "af9c049e79d43418fb4e1fdb7d1057bc.png"
            }, {
                key: "soothingExtract",
                path: i.p + "8a8a27c271a2e9f7ac45a7bf9219a23a.png"
            }]
              , B = i.p + "33f962d33f348872dd86d95aa96dab37.png"
              , P = r.concat(h, o, n, c, l, g, d, p, y, m, x, [], v, T, _, C)
              , z = [{
                key: "tileset",
                path: B,
                width: 64,
                height: 64
            }];
            class I extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
                constructor(e) {
                    super({
                        game: e,
                        name: "GrayScalePostFilter"
                    })
                }
                onPreRender() {
                    this.colorMatrix.grayscale(.5)
                }
                onDraw(e) {
                    this.drawFrame(e, this.fullFrame1),
                    this.bindAndDraw(this.fullFrame1)
                }
            }
            class D extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
                constructor(e) {
                    super({
                        game: e,
                        name: "BlurPostFilter",
                        fragShader: "\n\t\t\t\t#ifdef GL_FRAGMENT_PRECISION_HIGH\n\t\t\t\t#define highmedp highp\n\t\t\t\t#else\n\t\t\t\t#define highmedp mediump\n\t\t\t\t#endif\n\t\t\t\tprecision highmedp float;\n\n\t\t\t\tuniform sampler2D uMainSampler;\n\t\t\t\tvarying vec2 outTexCoord;\n\t\t\t\tuniform vec2 uTexSize;\n\t\t\t\tuniform vec2 uOffset;\n\n\t\t\t\tvoid main (void) {\n\t\t\t\t\tvec4 c = texture2D( uMainSampler, outTexCoord );\n\t\t\t\t\tvec4 l = texture2D( uMainSampler, outTexCoord + uOffset );\n\t\t\t\t\tvec4 r = texture2D( uMainSampler, outTexCoord - uOffset );\n\n\t\t\t\t\tgl_FragColor = (1.0*c + 1.0*l + 1.0*r) / 3.0;\n\t\t\t\t}\n\t\t\t"
                    }),
                    this.offsetX = 1,
                    this.offsetY = 1,
                    this.lowres = !0,
                    this.steps = 8
                }
                onPreRender() {
                    this.set2f("uTexSize", this.game.scale.width, this.game.scale.height)
                }
                onDraw(e) {
                    const t = this.lowres ? this.halfFrame1 : this.fullFrame1
                      , i = this.lowres ? this.halfFrame2 : this.fullFrame2;
                    this.copyFrame(e, t);
                    const s = 1 / t.width * this.offsetX
                      , a = 1 / t.height * this.offsetY;
                    for (let e = 0; e < this.steps; e++)
                        this.set2f("uOffset", s, 0),
                        this.bindAndDraw(t, i),
                        this.set2f("uOffset", 0, a),
                        this.bindAndDraw(i, t);
                    this.bindAndDraw(t)
                }
            }
            const M = {
                grass: [{
                    key: "grass_1",
                    name: "Bulbasaur"
                }, {
                    key: "grass_2",
                    name: "Chikorita"
                }, {
                    key: "grass_3",
                    name: "Treecko"
                }, {
                    key: "grass_4",
                    name: "Ivysaur"
                }, {
                    key: "grass_5",
                    name: "Bayleef"
                }, {
                    key: "grass_6",
                    name: "Grovyle"
                }, {
                    key: "grass_7",
                    name: "Venusaur"
                }, {
                    key: "grass_8",
                    name: "Meganium"
                }, {
                    key: "grass_9",
                    name: "Sceptile"
                }, {
                    key: "grass_10",
                    name: "Turtwig"
                }, {
                    key: "grass_11",
                    name: "Grotle"
                }, {
                    key: "grass_12",
                    name: "Torterra"
                }, {
                    key: "grass_13",
                    name: "Snivy"
                }, {
                    key: "grass_14",
                    name: "Servine"
                }, {
                    key: "grass_15",
                    name: "Serperior"
                }],
                fire: [{
                    key: "fire_1",
                    name: "Charmander"
                }, {
                    key: "fire_2",
                    name: "Cyndaquil"
                }, {
                    key: "fire_3",
                    name: "Torchic"
                }, {
                    key: "fire_4",
                    name: "Charmeleon"
                }, {
                    key: "fire_5",
                    name: "Quilava"
                }, {
                    key: "fire_6",
                    name: "Combusken"
                }, {
                    key: "fire_7",
                    name: "Charizard"
                }, {
                    key: "fire_8",
                    name: "Typhlosion"
                }, {
                    key: "fire_9",
                    name: "Blaziken"
                }, {
                    key: "fire_10",
                    name: "Chimchar"
                }, {
                    key: "fire_11",
                    name: "Monferno"
                }, {
                    key: "fire_12",
                    name: "Infernape"
                }, {
                    key: "fire_13",
                    name: "Tepig"
                }, {
                    key: "fire_14",
                    name: "Pignite"
                }, {
                    key: "fire_15",
                    name: "Emboar"
                }],
                water: [{
                    key: "water_1",
                    name: "Squirtle"
                }, {
                    key: "water_2",
                    name: "Totodile"
                }, {
                    key: "water_3",
                    name: "Mudkip"
                }, {
                    key: "water_4",
                    name: "Wartortle"
                }, {
                    key: "water_5",
                    name: "Croconaw"
                }, {
                    key: "water_6",
                    name: "Marshtomp"
                }, {
                    key: "water_7",
                    name: "Blastoise"
                }, {
                    key: "water_8",
                    name: "Feraligatr"
                }, {
                    key: "water_9",
                    name: "Swampert"
                }, {
                    key: "water_10",
                    name: "Piplup"
                }, {
                    key: "water_11",
                    name: "Prinplup"
                }, {
                    key: "water_12",
                    name: "Empoleon"
                }, {
                    key: "water_13",
                    name: "Oshawott"
                }, {
                    key: "water_14",
                    name: "Dewott"
                }, {
                    key: "water_15",
                    name: "Samurott"
                }],
                bulbasaur: [{
                    key: "bulbasaur_1",
                    name: "Bulbasaur"
                }, {
                    key: "bulbasaur_2",
                    name: "Ivysaur"
                }, {
                    key: "bulbasaur_3",
                    name: "Venusaur"
                }, {
                    key: "bulbasaur_4",
                    name: "Mega Venusaur"
                }],
                charmander: [{
                    key: "charmander_1",
                    name: "Charmander"
                }, {
                    key: "charmander_2",
                    name: "Charmeleon"
                }, {
                    key: "charmander_3",
                    name: "Charizard"
                }, {
                    key: "charmander_4",
                    name: "Mega Charizard Y"
                }, {
                    key: "charmander_5",
                    name: "Mega Charizard X"
                }],
                squirtle: [{
                    key: "squirtle_1",
                    name: "Squirtle"
                }, {
                    key: "squirtle_2",
                    name: "Wartortle"
                }, {
                    key: "squirtle_3",
                    name: "Blastoise"
                }, {
                    key: "squirtle_4",
                    name: "Mega Blastoise"
                }],
                electric: [{
                    key: "electric_1",
                    name: "Joltik",
                    scale: .8
                }, {
                    key: "electric_2",
                    name: "Galvantula"
                }, {
                    key: "electric_3",
                    name: "Pichu"
                }, {
                    key: "electric_4",
                    name: "Pikachu"
                }, {
                    key: "electric_5",
                    name: "Raichu"
                }, {
                    key: "electric_6",
                    name: "Ampharos"
                }, {
                    key: "electric_7",
                    name: "Electabuzz"
                }, {
                    key: "electric_8",
                    name: "Electivire"
                }, {
                    key: "electric_9",
                    name: "Zapdos"
                }],
                rotom: [{
                    key: "rotom_1",
                    name: "Rotom"
                }, {
                    key: "rotom_3",
                    name: "Wash Rotom"
                }, {
                    key: "rotom_4",
                    name: "Frost Rotom"
                }, {
                    key: "rotom_2",
                    name: "Heat Rotom"
                }, {
                    key: "rotom_5",
                    name: "Fan Rotom"
                }, {
                    key: "rotom_6",
                    name: "Mow Rotom"
                }],
                eevee: [{
                    key: "eevee_1",
                    name: "Eevee"
                }, {
                    key: "eevee_2",
                    name: "Vaporeon"
                }, {
                    key: "eevee_3",
                    name: "Jolteon"
                }, {
                    key: "eevee_4",
                    name: "Flareon"
                }, {
                    key: "eevee_5",
                    name: "Espeon"
                }, {
                    key: "eevee_6",
                    name: "Umbreon"
                }, {
                    key: "eevee_7",
                    name: "Leafeon"
                }, {
                    key: "eevee_8",
                    name: "Glaceon"
                }, {
                    key: "eevee_9",
                    name: "Sylveon"
                }],
                legendary: [{
                    key: "legendary_1",
                    name: "Mew"
                }, {
                    key: "legendary_2",
                    name: "Mewtwo"
                }, {
                    key: "legendary_3",
                    name: "Lugia"
                }, {
                    key: "legendary_4",
                    name: "Ho-oh"
                }, {
                    key: "legendary_5",
                    name: "Kyogre"
                }, {
                    key: "legendary_6",
                    name: "Groudon"
                }, {
                    key: "legendary_7",
                    name: "Rayquaza"
                }, {
                    key: "legendary_8",
                    name: "Dialga"
                }, {
                    key: "legendary_9",
                    name: "Palkia"
                }, {
                    key: "legendary_10",
                    name: "Giratina"
                }, {
                    key: "legendary_11",
                    name: "Yveltal"
                }, {
                    key: "legendary_12",
                    name: "Xerneas"
                }, {
                    key: "legendary_13",
                    name: "Zygarde"
                }, {
                    key: "legendary_14",
                    name: "Arceus",
                    scale: 1.4
                }],
                unown: [{
                    key: "unown_28",
                    name: "Unown ?"
                }],
                mart: [{
                    key: "trainerTips",
                    scale: .9,
                    name: "Trainer Tips"
                }, {
                    key: "pokeMartSign",
                    scale: 1.1,
                    name: "Poké Mart Sign"
                }, {
                    key: "pokeMartShelves",
                    scale: 1.15,
                    name: "Poké Mart Shelves"
                }, {
                    key: "pokeMartDP",
                    scale: 1.1,
                    name: "Poké Mart (DP)",
                    charges: 36,
                    recharge: 60,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }, {
                    key: "pokeMartHGSS",
                    scale: 1.4,
                    name: "Poké Mart (HGSS)",
                    charges: 46,
                    recharge: 54,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }, {
                    key: "kantoPokemonGyms",
                    scale: 1.1,
                    name: "Kanto Pokémon Gyms",
                    charges: 55,
                    recharge: 48,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }, {
                    key: "celadonStore",
                    scale: 1.15,
                    name: "Celadon Department Store",
                    charges: 64,
                    recharge: 45,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 3
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }, {
                    key: "goldenrodStore",
                    scale: 1.1,
                    name: "Goldenrod Department Store",
                    charges: 73,
                    recharge: 39,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 3
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }, {
                    key: "silphCo",
                    scale: 1.15,
                    name: "Silph Co.",
                    charges: 82,
                    recharge: 33,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 3
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }, {
                    key: "foreignBuilding",
                    scale: 1.2,
                    name: "Foreign Building",
                    charges: 91,
                    recharge: 30,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 3
                    }, {
                        category: "potion",
                        tier: 1
                    }]
                }],
                pokeball: [{
                    key: "pokeBall",
                    scale: .7,
                    name: "Poke Ball"
                }, {
                    key: "greatBall",
                    scale: .7,
                    name: "Great Ball"
                }, {
                    key: "ultraBall",
                    scale: .7,
                    name: "Ultra Ball"
                }, {
                    key: "johtoParkBall",
                    scale: .7,
                    name: "Park Ball (Johto)"
                }, {
                    key: "netBall",
                    scale: .7,
                    name: "Net Ball"
                }, {
                    key: "timerBall",
                    scale: .7,
                    name: "Timer Ball"
                }, {
                    key: "diveBall",
                    scale: .7,
                    name: "Dive Ball"
                }, {
                    key: "gSBall",
                    scale: .7,
                    name: "GS Ball"
                }, {
                    key: "masterBall",
                    scale: .7,
                    name: "Master Ball"
                }],
                potion: [{
                    key: "antidote",
                    scale: .7,
                    name: "Antidote"
                }, {
                    key: "potion",
                    scale: .72,
                    name: "Potion"
                }, {
                    key: "ether",
                    scale: .69,
                    name: "Ether"
                }, {
                    key: "maxPotion",
                    scale: .77,
                    name: "Max Potion"
                }, {
                    key: "honey",
                    scale: .7,
                    name: "Honey"
                }, {
                    key: "revive",
                    scale: .69,
                    name: "Revive"
                }, {
                    key: "maxRevive",
                    scale: .91,
                    name: "Max Revive"
                }],
                ruin: [{
                    key: "dirtPile",
                    scale: .95,
                    name: "Dirt Pile"
                }, {
                    key: "coalSlabs",
                    scale: 1,
                    name: "Coal Slabs"
                }, {
                    key: "rock",
                    scale: 1,
                    name: "Rock"
                }, {
                    key: "tomb",
                    scale: 1.1,
                    name: "Tomb",
                    charges: 29,
                    recharge: 96,
                    generates: [{
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }]
                }, {
                    key: "relicCastle",
                    scale: 1.05,
                    name: "Relic Castle Entrances",
                    charges: 39,
                    recharge: 90,
                    generates: [{
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }]
                }, {
                    key: "spearPillarRuins",
                    scale: 1.22,
                    name: "Spear Pillar Ruins",
                    charges: 49,
                    recharge: 84,
                    generates: [{
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }]
                }, {
                    key: "ruinsOfAlph",
                    scale: 1.18,
                    name: "Ruins of Alph",
                    charges: 56,
                    recharge: 72,
                    generates: [{
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }]
                }, {
                    key: "snowpointTemple",
                    scale: 1.15,
                    name: "Snowpoint Temple",
                    charges: 64,
                    recharge: 63,
                    generates: [{
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }]
                }, {
                    key: "amitySquareRuins",
                    scale: 1.2,
                    name: "Amity Square Ruins",
                    charges: 68,
                    recharge: 57,
                    generates: [{
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "stone",
                        tier: 1
                    }]
                }],
                fossil: [{
                    key: "rareBone",
                    scale: .72,
                    name: "Rare Bone"
                }, {
                    key: "domeFossil",
                    scale: .71,
                    name: "Dome Fossil"
                }, {
                    key: "helixFossil",
                    scale: .74,
                    name: "Helix Fossil"
                }, {
                    key: "rootFossil",
                    scale: .71,
                    name: "Root Fossil"
                }, {
                    key: "clawFossil",
                    scale: .74,
                    name: "Claw Fossil"
                }, {
                    key: "skullFossil",
                    scale: .71,
                    name: "Skull Fossil"
                }, {
                    key: "armorFossil",
                    scale: .74,
                    name: "Armor Fossil"
                }, {
                    key: "coverFossil",
                    scale: .77,
                    name: "Cover Fossil"
                }, {
                    key: "plumeFossil",
                    scale: .81,
                    name: "Plume Fossil"
                }, {
                    key: "oldAmber",
                    scale: .85,
                    name: "Old Amber"
                }],
                stone: [{
                    key: "moonStone",
                    scale: .7,
                    name: "Moon Stone"
                }, {
                    key: "leafStone",
                    scale: .7,
                    name: "Leaf Stone"
                }, {
                    key: "thunderStone",
                    scale: .7,
                    name: "Thunder Stone"
                }, {
                    key: "shinyStone",
                    scale: .7,
                    name: "Shiny Stone"
                }, {
                    key: "fireStone",
                    scale: .7,
                    name: "Fire Stone"
                }, {
                    key: "dawnStone",
                    scale: .75,
                    name: "Dawn Stone"
                }, {
                    key: "iceStone",
                    scale: .75,
                    name: "Ice Stone"
                }, {
                    key: "waterStone",
                    scale: .7,
                    name: "Water Stone"
                }, {
                    key: "duskStone",
                    scale: .75,
                    name: "Dusk Stone"
                }, {
                    key: "sunStone",
                    scale: .8,
                    name: "Sun Stone"
                }],
                construction: [{
                    key: "bricks",
                    scale: .85,
                    name: "Bricks"
                }, {
                    key: "girders",
                    scale: 1,
                    name: "Girders"
                }, {
                    key: "drums",
                    scale: 1.05,
                    name: "Drums"
                }, {
                    key: "miningVehicles",
                    scale: 1,
                    name: "Mining Vehicles",
                    charges: 18,
                    recharge: 60,
                    generates: [{
                        category: "vending",
                        tier: 1
                    }]
                }, {
                    key: "greatMarshTrain",
                    scale: 1,
                    name: "Great Marsh Train",
                    charges: 21,
                    recharge: 51,
                    generates: [{
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 2
                    }]
                }, {
                    key: "snowpointCrane",
                    scale: 1,
                    name: "Snowpoint City Crane",
                    charges: 28,
                    recharge: 39,
                    generates: [{
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 2
                    }]
                }, {
                    key: "driftveilCrane",
                    scale: 1.1,
                    name: "Driftveil City Crane",
                    charges: 34,
                    recharge: 30,
                    generates: [{
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 2
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 3
                    }]
                }, {
                    key: "fuegoIronworks",
                    scale: 1.07,
                    name: "Fuego Ironworks",
                    charges: 34,
                    recharge: 30,
                    generates: [{
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 2
                    }, {
                        category: "vending",
                        tier: 3
                    }]
                }, {
                    key: "kantoPowerPlant",
                    scale: 1.1,
                    name: "Kanto Power Plant",
                    charges: 38,
                    recharge: 30,
                    generates: [{
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 2
                    }, {
                        category: "vending",
                        tier: 3
                    }, {
                        category: "vending",
                        tier: 2
                    }, {
                        category: "vending",
                        tier: 3
                    }]
                }],
                vending: [{
                    key: "vendingBW",
                    scale: .8,
                    name: "Vending Machine (BW)"
                }, {
                    key: "vendingDP",
                    scale: .95,
                    name: "Vending Machine (DP)"
                }, {
                    key: "vendingORAS",
                    scale: .9,
                    name: "Vending Machine (ORAS)",
                    charges: 6,
                    generates: [{
                        category: "drink",
                        tier: 1
                    }]
                }],
                drink: [{
                    key: "freshWater",
                    scale: .72,
                    name: "Fresh Water"
                }, {
                    key: "sodaPop",
                    scale: .8,
                    name: "Soda Pop"
                }, {
                    key: "lemonade",
                    scale: .75,
                    name: "Lemonade"
                }, {
                    key: "moomooMilk",
                    scale: .75,
                    name: "Moomoo Milk"
                }, {
                    key: "berryJuice",
                    scale: .75,
                    name: "Berry Juice"
                }, {
                    key: "boostJuice",
                    scale: .79,
                    name: "Boost Juice"
                }, {
                    key: "criticalHerbTea",
                    scale: .88,
                    name: "Critical Herb Tea"
                }],
                center: [{
                    key: "pokedex",
                    scale: .86,
                    name: "Pokédex"
                }, {
                    key: "pc",
                    scale: .82,
                    name: "PC"
                }, {
                    key: "tent",
                    scale: .92,
                    name: "Tent"
                }, {
                    key: "centerDP",
                    scale: .87,
                    name: "Pokémon Center (DP)"
                }, {
                    key: "centerHGSS",
                    scale: 1,
                    name: "Pokémon Center (HGSS)"
                }, {
                    key: "johtoGym",
                    scale: 1.04,
                    name: "Johto Gym"
                }, {
                    key: "vermilionPort",
                    scale: 1.09,
                    name: "Vermilion Port Entrance"
                }, {
                    key: "centerBW",
                    scale: 1.01,
                    name: "Pokémon Center (BW)"
                }, {
                    key: "pokemonLeague",
                    scale: 1.08,
                    name: "Pokémon League"
                }],
                berry: [],
                edibles: [{
                    key: "leftovers",
                    scale: .65,
                    name: "Leftovers"
                }, {
                    key: "tinyMushroom",
                    scale: .55,
                    name: "Tiny Mushroom"
                }, {
                    key: "bigMushroom",
                    scale: .7,
                    name: "Big Mushroom"
                }, {
                    key: "energyRoot",
                    scale: .83,
                    name: "Energy Root"
                }, {
                    key: "bigRoot",
                    scale: .82,
                    name: "Big Root"
                }, {
                    key: "absorbBulb",
                    scale: 1,
                    name: "Absorb Bulb"
                }, {
                    key: "bigMalasada",
                    scale: 1,
                    name: "Big Malasada"
                }, {
                    key: "lavaCookie",
                    scale: .76,
                    name: "Lava Cookie"
                }, {
                    key: "rareCandy",
                    scale: .8,
                    name: "Rare Candy"
                }],
                levelUpRewardChest: [{
                    key: "chest_1",
                    scale: .96,
                    name: "Reward chest",
                    charges: 7,
                    generates: [{
                        category: "potion",
                        tier: 1
                    }, {
                        category: "mart",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "mart",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "potion",
                        tier: 2
                    }]
                }],
                martChest: [{
                    key: "chest_1",
                    scale: .96,
                    name: "Mart chest",
                    charges: 7,
                    generates: [{
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 1
                    }, {
                        category: "mart",
                        tier: 1
                    }, {
                        category: "potion",
                        tier: 1
                    }, {
                        category: "pokeball",
                        tier: 2
                    }, {
                        category: "mart",
                        tier: 2
                    }, {
                        category: "potion",
                        tier: 2
                    }]
                }],
                ruinChest: [{
                    key: "chest_2",
                    scale: .96,
                    name: "Ruin chest",
                    charges: 7,
                    generates: [{
                        category: "stone",
                        tier: 1
                    }, {
                        category: "ruin",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "ruin",
                        tier: 2
                    }, {
                        category: "fossil",
                        tier: 1
                    }, {
                        category: "fossil",
                        tier: 2
                    }, {
                        category: "stone",
                        tier: 2
                    }]
                }],
                constructionChest: [{
                    key: "chest_3",
                    scale: .96,
                    name: "Construction chest",
                    charges: 7,
                    generates: [{
                        category: "drink",
                        tier: 1
                    }, {
                        category: "construction",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "construction",
                        tier: 2
                    }, {
                        category: "vending",
                        tier: 1
                    }, {
                        category: "vending",
                        tier: 2
                    }, {
                        category: "drink",
                        tier: 2
                    }]
                }],
                experience: [{
                    key: "soothingCrystal",
                    scale: 1.45,
                    name: "Experience"
                }, {
                    key: "greatSoothingCrystal",
                    scale: 1.45,
                    name: "Experience"
                }, {
                    key: "ultraSoothingCrystal",
                    scale: 1.4,
                    name: "Experience"
                }, {
                    key: "soothingStone",
                    scale: 1.4,
                    name: "Experience"
                }, {
                    key: "soothingExtract",
                    scale: 1.65,
                    name: "Experience"
                }]
            }
              , R = 16769202
              , E = 13216895
              , F = 5025616
              , G = 3678741
              , A = 13348482;
            class O extends Phaser.GameObjects.Container {
                constructor(e, t, i, s) {
                    super(e, 0, 0),
                    this.scene = e,
                    e.add.existing(this),
                    this.hover = !1,
                    this._hold = !1,
                    this.liftSmooth = 0,
                    this.holdSmooth = 0,
                    this.offset = new Phaser.Math.Vector2,
                    this.goalPos = new Phaser.Math.Vector2,
                    this.stickPos = new Phaser.Math.Vector2,
                    this.isSticky = !0,
                    this.clickBlock = !1,
                    this.slot = new Phaser.Math.Vector2,
                    this.category = t,
                    this.tier = i,
                    this.blocked = s,
                    this.sightBlocked = s,
                    this.cycle = 0,
                    this.charges = 1.45 * Math.pow(1.6, i - 1),
                    this.chargeBlock = !1,
                    this.justSpawned = !0,
                    this.itemData.charges && (this.charges = this.itemData.charges),
                    this.rechargeTimer = 0,
                    this.itemData.recharge && (this.rechargeTimer = this.itemData.recharge),
                    this.clickTimer = 0,
                    this.image = e.add.image(0, 0, ""),
                    this.add(this.image),
                    this.imageScale = 1,
                    this.hintAnimation = 1,
                    this.mergeAnimation = 1,
                    this.wobbleAnimation = 1,
                    this.grass = e.add.image(0, this.scene.CELL_SIZE / 2, "grass_1"),
                    this.grass.setVisible(!1),
                    this.grass.setOrigin(.5, 1),
                    this.add(this.grass),
                    this.bolt = e.add.image(0, 0, "bolt"),
                    this.bolt.setScale(this.scene.GRID_SIZE / this.bolt.width),
                    this.bolt.setTint(14526976),
                    this.bolt.setVisible(!1),
                    this.bolt.setBlendMode(Phaser.BlendModes.ADD),
                    this.add(this.bolt),
                    this.checkmark = e.add.image(.33 * this.scene.GRID_SIZE, .3 * this.scene.GRID_SIZE, "checkmark"),
                    this.checkmark.setScale(.7 * this.scene.GRID_SIZE / this.checkmark.width),
                    this.checkmark.setDepth(10002),
                    this.checkmark.setVisible(!1),
                    this.add(this.checkmark),
                    this.text = e.createText(-this.scene.GRID_SIZE / 2, this.scene.GRID_SIZE / 2, this.scene.GRID_SIZE / 6, e.weights.bold, "#000"),
                    this.text.setOrigin(0, 1),
                    this.text.setAlpha(0),
                    this.add(this.text),
                    this.updateText(),
                    e.addEvent(230, ( () => {
                        this.scene && (this.makeInteractive(),
                        this.justSpawned = !1,
                        this.x == this.goalPos.x && this.y == this.goalPos.y || this.startWobbleAnimation())
                    }
                    ), this),
                    this.updateImage()
                }
                onScreenResize() {
                    this.checkmark.x = .33 * this.scene.GRID_SIZE,
                    this.checkmark.y = .3 * this.scene.GRID_SIZE,
                    this.checkmark.setScale(.7 * this.scene.GRID_SIZE / this.checkmark.width),
                    this.updateImage()
                }
                update(e, t) {
                    this.x += (this.goalPos.x - this.x) / (this.justSpawned ? 6 : this.hold ? 1.5 : 3),
                    this.y += (this.goalPos.y - this.y) / (this.justSpawned ? 6 : this.hold ? 1.5 : 3);
                    let i = this.imageScale;
                    if (i *= this.hintAnimation * this.mergeAnimation,
                    i *= 1 - .08 * this.holdSmooth,
                    this.blocked || !this.drops || this.chargeBlock || (i *= 1 + .03 * Math.sin(6 * e / 1e3) * this.bolt.alpha),
                    this.image.setScale(i * this.wobbleAnimation, i * (2 - this.wobbleAnimation)),
                    this.isSticky && this.hold) {
                        this.x += (this.stickPos.x - this.x) / 1.5,
                        this.y += (this.stickPos.y - this.y) / 1.5;
                        const e = .15 * this.scene.GRID_SIZE;
                        Phaser.Math.Distance.BetweenPoints(this.goalPos, this.stickPos) > e && (this.isSticky = !1,
                        this.clickBlock = !0,
                        this.emit("grab"),
                        this.clearTweens(),
                        this.liftTween = this.scene.tweens.add({
                            targets: this,
                            liftSmooth: {
                                from: this.liftSmooth,
                                to: 1
                            },
                            ease: "Cubic",
                            duration: 200
                        }))
                    }
                    this.itemData.recharge && this.itemData.charges && (this.charges < 1.5 * this.itemData.charges && this.rechargeTimer < 0 && (this.charges += 1,
                    this.updateText(),
                    this.rechargeTimer = this.itemData.recharge),
                    this.charges > .75 * this.itemData.charges && this.chargeBlock && (this.chargeBlock = !1,
                    this.emit("recharged", !!this.itemData.recharge)),
                    this.image.setTint(this.chargeBlock ? 7829367 : 16777215),
                    this.rechargeTimer -= t / 1e3),
                    this.drops && !this.blocked && (this.bolt.setVisible(!this.chargeBlock),
                    this.bolt.visible && (this.bolt.setScale(this.scene.GRID_SIZE / this.bolt.width * (.9 + .1 * Math.sin(1 * e / 1e3))),
                    this.bolt.setAlpha(2 + 2 * Math.sin(1 * e / 1e3))))
                }
                upgrade(e) {
                    this.tier += e,
                    this.itemData.charges && (this.charges = this.itemData.charges,
                    this.itemData.recharge && (this.rechargeTimer = this.itemData.recharge)),
                    this.chargeBlock = !1,
                    this.updateText(),
                    this.updateImage()
                }
                updateImage() {
                    if (this.image.setTint(16777215),
                    this.grass.y = this.scene.CELL_SIZE / 2,
                    this.sightBlocked) {
                        let e = this.itemData.scale || 1;
                        this.image.setTexture(this.imageKey),
                        this.imageScale = e * this.scene.GRID_SIZE / this.image.width,
                        this.grass.setVisible(!0),
                        this.grass.setOrigin(.5, 1),
                        this.grass.setScale(1.35 * this.scene.CELL_SIZE / this.grass.width),
                        this.grass.setAlpha(.95),
                        this.image.setTint(12303291)
                    } else {
                        let e = this.itemData.scale || 1;
                        this.image.setTexture(this.imageKey),
                        this.imageScale = e * this.scene.GRID_SIZE / this.image.width,
                        this.blocked ? (this.grass.setVisible(!0),
                        this.grass.setOrigin(.5, 1),
                        this.grass.setScale(.95 * this.scene.CELL_SIZE / this.grass.width),
                        this.grass.setAlpha(.45),
                        this.image.setTint(12303291),
                        this.image.setAlpha(.85)) : this.grass.setVisible(!1)
                    }
                    let e = Math.max(this.image.width, this.image.height)
                      , t = 1 - this.image.width / e / 2;
                    this.image.setOrigin(.5, t),
                    this.input && this.input.hitArea.setTo(-this.scene.GRID_SIZE / 2, -this.scene.GRID_SIZE / 2, this.scene.GRID_SIZE, this.scene.GRID_SIZE)
                }
                updateText() {
                    this.text.setVisible(!!this.drops),
                    this.text.setText(Math.ceil(this.charges).toString())
                }
                place(e, t, i=!1) {
                    if (this.slot.copy(e),
                    this.stickPos.copy(t),
                    this.goalPos.copy(t),
                    i && (this.x = t.x,
                    this.y = t.y),
                    this.blocked) {
                        const t = ["tall_grass_1", "tall_grass_2", "tall_grass_3"][(2 * e.x + e.y) % 3];
                        this.grass.setTexture(t),
                        this.grass.scaleX *= (e.x + 2 * e.y) % 2 == 0 ? 1 : -1
                    }
                }
                openSight() {
                    this.sightBlocked = !1,
                    this.updateImage()
                }
                use() {
                    this.cycle = (this.cycle + 1) % this.drops.length,
                    this.charges -= 1,
                    this.updateText(),
                    this.charges <= 0 && (this.chargeBlock = !0,
                    this.emit("depleted", !!this.itemData.recharge))
                }
                recharge() {
                    this.itemData.charges && (this.charges = this.itemData.charges,
                    this.emit("recharged"))
                }
                startHintAnimation(e=1) {
                    this.clearTweens(),
                    this.hintTween = this.scene.tweens.add({
                        targets: this,
                        hintAnimation: {
                            from: 1,
                            to: 1.35
                        },
                        yoyo: !0,
                        ease: "Sine.Out",
                        duration: 300,
                        repeat: e,
                        onComplete: () => {
                            this.scene && (this.hintTween = this.scene.tweens.add({
                                targets: this,
                                hintAnimation: {
                                    from: 1,
                                    to: 1.15
                                },
                                yoyo: !0,
                                ease: "Sine.Out",
                                duration: 200,
                                onComplete: () => {
                                    this.scene && 1 == e && (this.hintTween = this.scene.tweens.add({
                                        targets: this,
                                        hintAnimation: {
                                            from: 1,
                                            to: 1.03
                                        },
                                        yoyo: !0,
                                        ease: "Sine.Out",
                                        duration: 100
                                    }))
                                }
                            }))
                        }
                    })
                }
                startMergeAnimation() {
                    this.clearTweens(),
                    this.mergeTween = this.scene.tweens.add({
                        targets: this,
                        mergeAnimation: {
                            from: 1,
                            to: 1.25
                        },
                        yoyo: !0,
                        ease: "Sine.Out",
                        duration: 200,
                        onComplete: () => {
                            this.scene && (this.mergeTween = this.scene.tweens.add({
                                targets: this,
                                mergeAnimation: {
                                    from: 1,
                                    to: 1.05
                                },
                                yoyo: !0,
                                ease: "Sine.Out",
                                duration: 120
                            }))
                        }
                    })
                }
                startWobbleAnimation() {
                    this.clearTweens(),
                    this.mergeTween = this.scene.tweens.add({
                        targets: this,
                        wobbleAnimation: {
                            from: 1,
                            to: .92
                        },
                        yoyo: !0,
                        ease: "Sine.Out",
                        duration: 70,
                        onComplete: () => {
                            this.scene && (this.mergeTween = this.scene.tweens.add({
                                targets: this,
                                wobbleAnimation: {
                                    from: 1,
                                    to: 1.02
                                },
                                yoyo: !0,
                                ease: "Sine.Out",
                                duration: 40
                            }))
                        }
                    })
                }
                clearTweens() {
                    this.mergeTween && (this.mergeTween.stop(),
                    this.mergeAnimation = 1,
                    this.wobbleAnimation = 1),
                    this.hintTween && (this.hintTween.stop(),
                    this.hintAnimation = 1)
                }
                showCheckmark(e) {
                    this.checkmark.setVisible(e)
                }
                setVisible(e) {
                    return super.setVisible(e),
                    this
                }
                canMerge(e) {
                    return this.category == e.category && this.tier == e.tier && !this.isFinal && !this.sightBlocked && !e.sightBlocked
                }
                get isGenerator() {
                    return !!M[this.category][M[this.category].length - 1].recharge
                }
                get isFinal() {
                    return this.tier == M[this.category].length
                }
                get itemData() {
                    let e = M[this.category][this.tier - 1];
                    return void 0 === e && console.warn(`Item: Cannot find itemData for (${this.category}:${this.tier})`),
                    e
                }
                get imageKey() {
                    return this.itemData.key
                }
                get drops() {
                    return this.itemData.generates
                }
                get nextTier() {
                    return this.isFinal ? null : M[this.category][this.tier]
                }
                makeInteractive() {
                    this.removeInteractive(),
                    this.setInteractive({
                        useHandCursor: !0,
                        draggable: !0,
                        hitArea: new Phaser.Geom.Rectangle(-this.scene.GRID_SIZE / 2,-this.scene.GRID_SIZE / 2,this.scene.GRID_SIZE,this.scene.GRID_SIZE),
                        hitAreaCallback: Phaser.Geom.Rectangle.Contains
                    }).on("pointerout", this.onOut, this).on("pointerover", this.onOver, this).on("pointerdown", this.onDown, this).on("pointerup", this.onUp, this).on("dragstart", this.onDragStart, this).on("drag", this.onDrag, this).on("dragend", this.onDragEnd, this)
                }
                get hold() {
                    return this._hold
                }
                get drag() {
                    return !this.isSticky && this.hold
                }
                set hold(e) {
                    e != this._hold && (this.holdTween && this.holdTween.stop(),
                    this.holdTween = e ? this.scene.tweens.add({
                        targets: this,
                        holdSmooth: {
                            from: 0,
                            to: 1
                        },
                        ease: "Cubic.Out",
                        duration: 100
                    }) : this.scene.tweens.add({
                        targets: this,
                        holdSmooth: {
                            from: 1,
                            to: 0
                        },
                        ease: e => Phaser.Math.Easing.Elastic.Out(e, 1.5, .5),
                        duration: 500
                    })),
                    this._hold = e
                }
                onOut(e, t) {
                    this.hover = !1,
                    this.hold = !1
                }
                onOver(e, t, i, s) {
                    this.hover = !0
                }
                onDown(e, t, i, s) {
                    this.hold = !0
                }
                onUp(e, t, i, s) {
                    this.hold && (this.hold = !1,
                    this.clickBlock || this.emit("click")),
                    this.clickBlock = !1
                }
                onDragStart(e, t, i) {
                    this.blocked || this.offset.set(t, i)
                }
                onDrag(e, t, i) {
                    this.blocked || (this.goalPos.set(t, i),
                    this.isSticky || this.goalPos.add(this.offset))
                }
                onDragEnd(e, t, i, s) {
                    this.blocked || (this.isSticky ? this.goalPos.copy(this.stickPos) : (this.stickPos.copy(this.goalPos),
                    this.emit("drop", this.goalPos)),
                    this.isSticky = !0,
                    this.scene && (this.liftTween = this.scene.tweens.add({
                        targets: this,
                        liftSmooth: {
                            from: this.liftSmooth,
                            to: 0
                        },
                        ease: "Cubic",
                        duration: 200
                    })))
                }
                serialize() {
                    return {
                        category: this.category,
                        tier: this.tier,
                        charges: this.charges,
                        blocked: this.blocked,
                        sightBlocked: this.sightBlocked
                    }
                }
                deserialize(e) {
                    console.log("fuck if I know")
                }
            }
            class V extends Phaser.GameObjects.Container {
                constructor(e, t, i, s, a, r, h, o=1) {
                    super(e, t, i),
                    e.add.existing(this),
                    this.scene = e,
                    this.radius = r,
                    this.width = Math.max(s, 2 * r),
                    this.height = Math.max(a, 2 * r),
                    this.color = h,
                    this.origin = new Phaser.Math.Vector2(.5,.5),
                    this.setAlpha(o),
                    this.context = this.scene.add.graphics({
                        x: 0,
                        y: 0
                    }),
                    this.add(this.context),
                    this.updatePolygon()
                }
                setWidth(e) {
                    this.width = Math.max(e, 2 * this.radius),
                    this.updatePolygon()
                }
                setHeight(e) {
                    this.height = Math.max(e, 2 * this.radius),
                    this.updatePolygon()
                }
                setRadius(e) {
                    this.radius = e,
                    this.updatePolygon()
                }
                setColor(e) {
                    this.color = e,
                    this.updatePolygon()
                }
                setOrigin(e, t) {
                    void 0 === t && (t = e),
                    this.origin.x = e,
                    this.origin.y = t,
                    this.updatePolygon()
                }
                updatePolygon() {
                    let e = [];
                    for (let t = 0; t < 4; t++) {
                        let i = Math.sign(Math.cos(t * Math.PI / 2 + .1))
                          , s = Math.sign(Math.sin(t * Math.PI / 2 + .1));
                        for (let a = 0; a < 8; a++) {
                            let r = Math.cos(t * Math.PI / 2 + a / 7 * Math.PI / 2)
                              , h = Math.sin(t * Math.PI / 2 + a / 7 * Math.PI / 2);
                            e.push({
                                x: (.5 - this.origin.x) * this.width + i * (this.width / 2 - this.radius) + this.radius * r,
                                y: (.5 - this.origin.y) * this.height + s * (this.height / 2 - this.radius) + this.radius * h
                            })
                        }
                    }
                    this.context.clear(),
                    this.context.fillStyle(this.color, 1),
                    this.context.fillPoints(e, !0, !0)
                }
                getColor() {
                    return this.color
                }
            }
            function L(e) {
                let t = Phaser.Display.Color.ValueToColor(e);
                return Phaser.Display.Color.RGBToString(t.red, t.green, t.blue)
            }
            function H(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }
            function W() {
                try {
                    return localStorage.setItem("test", "test"),
                    localStorage.removeItem("test"),
                    !0
                } catch (e) {}
                return !1
            }
            class q extends Phaser.GameObjects.Container {
                constructor(e, t, i) {
                    super(e, t, i),
                    this.scene = e,
                    this.scene.add.existing(this),
                    this.width = 7 * this.scene.GRID_SIZE,
                    this.height = 9 * this.scene.GRID_SIZE,
                    this.cells = new Map,
                    this.items = new Map,
                    this.hintCache = null,
                    this.initGridBackground(),
                    this.selection = e.add.image(0, 0, "selection"),
                    this.selection.setScale(this.scene.GRID_SIZE / this.selection.width),
                    this.selection.setVisible(!1),
                    this.selection.setTint(16729088),
                    this.selection.setAlpha(.8),
                    this.selection.setDepth(10001),
                    this.effects = e.add.graphics(),
                    this.effectsQueue = [],
                    this.tasks = [],
                    this.startAutoSave(),
                    this.loadData() || this.generateNewBoard()
                }
                initGridBackground() {
                    this.gridBorder = new V(this.scene,0,0,1e3,1e3,10,G),
                    this.add(this.gridBorder),
                    this.gridBackground = new V(this.scene,0,0,1e3,1e3,10,16769202),
                    this.add(this.gridBackground),
                    this.gridBorder.setInteractive().on("pointerdown", ( () => {
                        this.selected = void 0
                    }
                    ));
                    for (let e = 0; e < 7; e++)
                        for (let t = 0; t < 9; t++) {
                            let i = new Phaser.Math.Vector2(e,t)
                              , s = this.toCoords(i)
                              , a = this.scene.add.image(s.x, s.y, "cell");
                            a.setData("slot", this.toKey(i)),
                            a.setScale(this.scene.CELL_SIZE / a.width),
                            a.setTint(A),
                            this.cells.set(this.toKey(i), a)
                        }
                }
                onScreenResize(e, t) {
                    this.x = e.centerX,
                    this.y = e.centerY,
                    this.width = 7 * this.scene.GRID_SIZE,
                    this.height = 9 * this.scene.GRID_SIZE,
                    this.gridBorder.setRadius(4 * t),
                    this.gridBorder.setWidth(this.width + 3 * t),
                    this.gridBorder.setHeight(this.height + 3 * t),
                    this.gridBackground.setRadius(3 * t),
                    this.gridBackground.setWidth(this.width + 1 * t),
                    this.gridBackground.setHeight(this.height + 1 * t),
                    this.cells.forEach(( (e, t) => {
                        let i = this.toCoords(this.toVec(t));
                        e.setPosition(i.x, i.y),
                        e.setScale(this.scene.CELL_SIZE / e.width)
                    }
                    )),
                    this.items.forEach(( (e, t) => {
                        e.place(e.slot, this.toCoords(e.slot), !0),
                        e.onScreenResize()
                    }
                    ))
                }
                clearData() {
                    return !!W() && (localStorage.removeItem("PokeMerge1SaveData"),
                    this.generateNewBoard(),
                    !0)
                }
                
                saveData() {
                    if (test != 66) {
                        test += 1;
                    } else {
                    let e = {};
                    return this.items.forEach(( (t, i) => {
                        e[i] = t.serialize()
                    }
                    )),
                    localStorage.setItem("PokeMerge1SaveData", JSON.stringify(e)),
                    test = 65,
                    !0
                }

                }
                
                startAutoSave() {
                    setInterval(() => {
                        this.saveData();
                    }, 100);
                }
                
                loadData() {
                    test = 0
                    const e = localStorage.getItem("PokeMerge1SaveData");
                    if (!e)
                        return !1;
                    const t = JSON.parse(e);
                    for (let e in t) {
                        let i = t[e]
                          , s = this.toVec(e)
                          , a = this.createItem(s.x, s.y, i.category, i.tier, i.blocked);
                        if (!a)
                            return console.error("Unintended"),
                            !1;
                        a.deserialize(i)
                    }
                    return this.openAllSight(),
                    this.dirty(),
                    !0
                }
                update(e, t) {
                    this.items.forEach(( (i, s) => {
                        if (i.update(e, t),
                        i.setDepth(1e3 + i.y / 1e3 - i.x / 2e3 + this.scene.GRID_SIZE / 1e3 * (i.holdSmooth + (i.justSpawned ? 1 : 0))),
                        this.selected == i) {
                            let t = this.toCoords(i.slot);
                            this.selection.setPosition(t.x, t.y),
                            this.selection.setVisible(!i.drag),
                            this.selection.setScale(this.scene.GRID_SIZE / this.selection.width * (1.15 + .05 * Math.sin(4 * e / 1e3)))
                        }
                    }
                    )),
                    this.updateEffects(e)
                }
                createEffect(e, t) {
                    const i = this.scene.time.now;
                    this.effectsQueue.push({
                        x: e,
                        y: t,
                        time: i
                    })
                }
                updateEffects(e) {
                    this.effects.clear();
                    for (let t = this.effectsQueue.length - 1; t >= 0; t--) {
                        let i = this.effectsQueue[t]
                          , s = (e - i.time) / 300
                          , a = .9 * this.scene.GRID_SIZE * Phaser.Math.Easing.Cubic.Out(s)
                          , r = .15 * this.scene.GRID_SIZE * (1 - Phaser.Math.Easing.Sine.In(s));
                        if (s > 1) {
                            this.effectsQueue.splice(t, 1);
                            break
                        }
                        this.effects.lineStyle(r, 16777215),
                        this.effects.strokeCircle(i.x, i.y, a + r)
                    }
                }
                generateNewBoard() {
                    this.items.forEach(( (e, t) => {
                        e.destroy()
                    }
                    )),
                    this.items.clear();
                    const e = [["?1", "q4", "?1", "?1", "?1", "?1", "?1"], ["N2", "A4", "g4", "G2", "N1", "r2", "?1"], ["a5", "D2", "A1", "D3", "d2", "e2", "N3"], ["h1", "D2", "a3", "a4", "a2", "A1", "A3"], ["A2", "b1", "A2", "A1", "A1", "D1", "a3"], ["G1", "d1", "a1", "D1", "A3", "b2", "A2"], ["A3", "D2", "d2", "e1", "d4", "G2", "k4"], ["?1", "h2", "Q3", "D3", "D1", "A3", "r3"], ["?1", "?1", "?1", "o1", "k3", "a7", "?1"]];
                    for (let t = 0; t < e.length; t++)
                        for (let i = 0; i < e[0].length; i++) {
                            let s = e[t][i][0]
                              , a = parseInt(e[t][i][1])
                              , r = !(4 == t && i > 1 && i < 5);
                            switch (s) {
                            case "A":
                                s = "mart";
                                break;
                            case "a":
                                s = "pokeball";
                                break;
                            case "b":
                                s = "potion";
                                break;
                            case "D":
                                s = "ruin";
                                break;
                            case "d":
                                s = "fossil";
                                break;
                            case "e":
                                s = "stone";
                                break;
                            case "N":
                                s = "construction";
                                break;
                            case "k":
                                s = "drink";
                                break;
                            case "o":
                                s = "vending";
                                break;
                            case "G":
                                s = "center";
                                break;
                            case "r":
                                s = "edibles";
                                break;
                            case "q":
                                s = "charmander";
                                break;
                            case "g":
                                s = "squirtle";
                                break;
                            case "h":
                                s = "bulbasaur";
                                break;
                            case "Q":
                                s = "legendary";
                                break;
                            default:
                                s = "unown",
                                a = 1,
                                r = !0
                            }
                            this.createItem(i, t, s, a, r)
                        }
                    this.openAllSight();
                    for (let e = 0; e < 9; e++)
                        ;
                }
                createItem(e, t, i, s=1, a=!1) {
                    const r = new Phaser.Math.Vector2(e,t);
                    if (this.items.size >= 63)
                        return console.error("Cannot create item: Board is full"),
                        null;
                    if (e < 0 || e >= 7 || t < 0 || t >= 9)
                        return console.error(`Cannot create item: Not valid coordinates (${e},${t})`),
                        null;
                    if (this.items.get(this.toKey(r)))
                        return console.error(`Cannot create item: Slot (${e},${t}) is occupied`),
                        null;
                    if (void 0 === M[i] || void 0 === M[i][s - 1])
                        return console.error(`Cannot create item: No data available for (${i}:${s - 1})`),
                        null;
                    let h = new O(this.scene,i,s,a);
                    return h.place(r, this.toCoords(r), !0),
                    this.items.set(this.toKey(r), h),
                    this.dirty(),
                    h.on("drop", (e => {
                        let t = h.slot
                          , i = this.toGrid(e)
                          , s = this.items.get(this.toKey(i));
                        if (s && h != s)
                            if (h.canMerge(s)) {
                                if (h.charges = Math.max(h.charges, s.charges),
                                this.items.delete(this.toKey(i)),
                                s.destroy(),
                                this.items.delete(this.toKey(t)),
                                this.items.set(this.toKey(i), h),
                                h.place(i, this.toCoords(i), !0),
                                h.upgrade(1),
                                h.startMergeAnimation(),
                                this.openSight(i),
                                this.dirty(),
                                this.selected = h,
                                this.createEffect(h.x, h.y),
                                h.tier >= 5 && "experience" != h.category) {
                                    let e = this.getClosestFreeSlot(h.slot)
                                      , t = this.createItem(e.x, e.y, "experience", 1);
                                    if (t) {
                                        let e = this.toCoords(h.slot);
                                        t.x = e.x,
                                        t.y = e.y
                                    }
                                }
                            } else if (s.blocked)
                                h.place(t, this.toCoords(t));
                            else {
                                this.items.delete(this.toKey(t));
                                let e = this.getClosestFreeSlot(i);
                                this.items.set(this.toKey(e), s),
                                s.place(e, this.toCoords(e)),
                                this.items.delete(this.toKey(i)),
                                this.items.set(this.toKey(i), h),
                                h.place(i, this.toCoords(i)),
                                this.dirty()
                            }
                        else
                            s ? (h.place(t, this.toCoords(t)),
                            this.updateCellColors()) : (this.items.delete(this.toKey(t)),
                            this.items.set(this.toKey(i), h),
                            h.place(i, this.toCoords(i)),
                            this.dirty())
                    }
                    ), this),
                    h.on("click", (e => {
                        if (this.selected == h && !h.blocked) {
                            if (!h.chargeBlock && !this.isBoardFull()) {
                                let e = h.drops;
                                if (e && h.charges > 0) {
                                    let t = e[h.cycle % e.length]
                                      , i = this.getClosestFreeSlot(h.slot)
                                      , s = this.createItem(i.x, i.y, t.category, t.tier);
                                    if (s) {
                                        let e = this.toCoords(h.slot);
                                        s.x = e.x,
                                        s.y = e.y
                                    }
                                    h.use()
                                }
                            }
                            if ("experience" == h.category) {
                                let e = h.tier;
                                this.createEffect(h.x, h.y),
                                this.items.delete(this.toKey(h.slot)),
                                h.destroy(),
                                this.dirty(),
                                this.selected = void 0;
                                let t = [1, 3, 8, 20, 50][e - 1];
                                this.emit("experience", t)
                            }
                        }
                        !h.sightBlocked && h.scene && (this.selected = h)
                    }
                    )),
                    h.on("grab", ( () => {
                        this.selected = h;
                        let e = this.cells.get(this.toKey(h.slot));
                        e && e.setTint(A)
                    }
                    )),
                    h.on("depleted", (e => {
                        e || (this.items.delete(this.toKey(h.slot)),
                        h.destroy(),
                        this.selected = void 0),
                        this.emit("updateItem", h),
                        this.dirty()
                    }
                    )),
                    h.on("recharged", ( () => {
                        this.emit("updateItem", h),
                        this.dirty()
                    }
                    )),
                    h
                }
                sellSelected() {
                    this.selected && (this.items.delete(this.toKey(this.selected.slot)),
                    this.selected.destroy(),
                    this.dirty(),
                    this.selected = void 0)
                }
                rechargeSelected() {
                    this.selected && (this.selected.recharge(),
                    this.createEffect(this.selected.x, this.selected.y))
                }
                openSight(e) {
                    let t = [new Phaser.Math.Vector2(-1,0), new Phaser.Math.Vector2(1,-1), new Phaser.Math.Vector2(1,1), new Phaser.Math.Vector2(-1,1)];
                    for (let i of t) {
                        e.x += i.x,
                        e.y += i.y;
                        let t = this.items.get(this.toKey(e));
                        t && t.openSight()
                    }
                }
                openAllSight() {
                    for (let e = 0; e < 7; e++)
                        for (let t = 0; t < 9; t++) {
                            let i = new Phaser.Math.Vector2(e,t)
                              , s = this.toKey(i)
                              , a = this.items.get(s);
                            a && a.blocked || this.openSight(i)
                        }
                }
                showHint() {
                    let e = this.hintCache || this.findMove();
                    if (e) {
                        let t = this.items.get(e.from)
                          , i = this.items.get(e.to);
                        t && i && (t.startHintAnimation(),
                        i.startHintAnimation(),
                        this.hintCache = e)
                    }
                }
                findMove() {
                    let e = {}
                      , t = {};
                    this.items.forEach(( (i, s) => {
                        let a = `${i.category},${i.tier}`;
                        i.sightBlocked || i.justSpawned || i.isFinal || (i.blocked ? (t[a] || (t[a] = []),
                        t[a].push(s)) : (e[a] || (e[a] = []),
                        e[a].push(s)))
                    }
                    ));
                    let i = Object.keys(e).filter((function(e) {
                        return t.hasOwnProperty(e)
                    }
                    ))
                      , s = Object.keys(e).filter((function(t) {
                        return e[t].length > 1
                    }
                    ));
                    if (i && i.length > 0) {
                        let s = Phaser.Math.RND.pick(i);
                        return {
                            from: Phaser.Math.RND.pick(e[s]),
                            to: Phaser.Math.RND.pick(t[s])
                        }
                    }
                    if (s && s.length > 0) {
                        let t = Phaser.Math.RND.pick(s);
                        return Phaser.Math.RND.shuffle(e[t]),
                        {
                            from: e[t][0],
                            to: e[t][1]
                        }
                    }
                    return null
                }
                forceMerge() {
                    let e = this.findMove();
                    if (e) {
                        let t = this.items.get(e.from)
                          , i = this.items.get(e.to);
                        if (t && i) {
                            let e = t.slot
                              , s = i.slot;
                            !t.canMerge(i) || !this.isBoardFull() && (t.drops && t.charges > 1 || i.drops && i.charges > 1) || (this.items.delete(this.toKey(s)),
                            i.destroy(),
                            this.items.delete(this.toKey(e)),
                            this.items.set(this.toKey(s), t),
                            t.place(s, this.toCoords(s)),
                            t.upgrade(1),
                            this.openSight(s),
                            this.dirty())
                        }
                    } else if (this.isBoardFull()) {
                        let e = this.items.get(this.toKey({
                            x: 0,
                            y: 0
                        }));
                        e && (this.items.delete(this.toKey({
                            x: 0,
                            y: 0
                        })),
                        e.destroy())
                    }
                }
                toKey(e) {
                    return `${e.x},${e.y}`
                }
                toVec(e) {
                    let[t,i] = e.split(",");
                    return new Phaser.Math.Vector2(parseInt(t),parseInt(i))
                }
                toCoords(e) {
                    let t = new Phaser.Math.Vector2(this.x - this.width / 2,this.y - this.height / 2);
                    return t.x += (e.x + .5) * this.scene.GRID_SIZE,
                    t.y += (e.y + .5) * this.scene.GRID_SIZE,
                    t
                }
                toGrid(e) {
                    return e.subtract(new Phaser.Math.Vector2(this.x - this.width / 2,this.y - this.height / 2)),
                    new Phaser.Math.Vector2(Phaser.Math.Clamp(Math.floor(e.x / this.scene.GRID_SIZE), 0, 6),Phaser.Math.Clamp(Math.floor(e.y / this.scene.GRID_SIZE), 0, 8))
                }
                getRandomFreeSlot() {
                    let e = new Phaser.Math.Vector2;
                    for (; !this.isBoardFull() && (e.x = H(0, 6),
                    e.y = H(0, 8),
                    this.items.get(this.toKey(e))); )
                        ;
                    return e
                }
                getClosestFreeSlot(e) {
                    if (this.isBoardFull())
                        throw "Board full!";
                    let t = new Phaser.Math.Vector2
                      , i = 100
                      , s = [];
                    for (let a = 0; a < 7; a++)
                        for (let r = 0; r < 9; r++)
                            if (t.set(a, r),
                            !this.items.get(this.toKey(t))) {
                                let h = Phaser.Math.Distance.BetweenPoints(e, t);
                                h < i && (s = [],
                                i = h),
                                h == i && s.push({
                                    x: a,
                                    y: r
                                })
                            }
                    let a = s[Math.floor(Math.random() * s.length)];
                    return new Phaser.Math.Vector2(a.x,a.y)
                }
                getMaxTierMap() {
                    let e = {};
                    return this.items.forEach(( (t, i) => {
                        t.blocked || (t.tier > e[t.category] || !e[t.category]) && (e[t.category] = t.tier)
                    }
                    )),
                    e
                }
                findItems(e, t, i=!0) {
                    let s = [];
                    return this.items.forEach(( (a, r) => {
                        a.category == e && a.tier == t && (i && a.blocked || s.push(a))
                    }
                    )),
                    s
                }
                getTaskItems(e) {
                    return e.items.map((e => this.findItems(e.category, e.tier)))
                }
                checkTask(e) {
                    let t = !0
                      , i = []
                      , s = this.getTaskItems(e);
                    for (let a = 0; a < e.items.length; a++)
                        i[a] = s[a].length,
                        s[a].length < e.items[a].amount && (t = !1);
                    return t && s.forEach(( (e, t) => {
                        e.forEach((e => {
                            if (e.slot) {
                                let t = this.cells.get(this.toKey(e.slot));
                                t && t.setTint(F)
                            }
                        }
                        ))
                    }
                    )),
                    s.forEach(( (e, t) => {
                        e.forEach((e => {
                            e.showCheckmark(!0)
                        }
                        ))
                    }
                    )),
                    {
                        success: t,
                        count: i
                    }
                }
                checkTasks() {
                    this.cells.forEach(( (e, t) => {
                        e.setTint(A)
                    }
                    )),
                    this.items.forEach((e => {
                        e.showCheckmark(!1);
                        let t = this.cells.get(this.toKey(e.slot));
                        t && e.drops && !e.blocked && !e.chargeBlock && t.setTint(16757504)
                    }
                    ));
                    let e = [];
                    for (let t of this.tasks)
                        e.push(this.checkTask(t));
                    this.emit("checkTasks", e)
                }
                completeTask(e) {
                    let t = this.tasks[e];
                    if (!this.checkTask(t).success)
                        return void console.error("Attempting to complete task that's not done");
                    let i = this.getTaskItems(t);
                    for (let e = 0; e < t.items.length; e++)
                        for (let s = 0; s < t.items[e].amount; s++) {
                            let t = i[e][s];
                            this.createEffect(t.x, t.y),
                            this.items.delete(this.toKey(t.slot)),
                            t.destroy(),
                            this.selected == t && (this.selected = void 0)
                        }
                    for (let e = 0; e < t.reward.length; e++)
                        for (let i = 0; i < t.reward[e].amount; i++) {
                            let i = t.reward[e]
                              , s = this.getRandomFreeSlot();
                            if (this.isBoardFull())
                                console.error("Unintended");
                            else {
                                let e = this.createItem(s.x, s.y, i.category, i.tier);
                                e && (e.x = this.scene.CX,
                                e.y = this.scene.H)
                            }
                        }
                    this.dirty()
                }
                updateTasks(e) {
                    this.tasks = e,
                    this.checkTasks()
                }
                updateCellColors() {
                    this.checkTasks()
                }
                spawnLevelUpReward(e) {
                    let t = this.getRandomFreeSlot();
                    if (this.isBoardFull())
                        console.error("Unintended");
                    else {
                        let i = this.getMaxTierMap()
                          , s = "levelUpRewardChest";
                        i.ruin > 3 && (s = ["martChest", "ruinChest"][e % 2]),
                        i.construction > 3 && (s = ["martChest", "ruinChest", "constructionChest"][e % 3]);
                        let a = this.createItem(t.x, t.y, s, 1);
                        a && (a.x = this.scene.CX,
                        a.y = this.scene.H)
                    }
                }
                isBoardFull() {
                    return this.items.size >= 63
                }
                dirty() {
                    this.hintCache = null,
                    this.checkTasks(),
                    this.saveData()
                }
                set selected(e) {
                    this._selected = e,
                    this.selection.setVisible(!!e),
                    this.emit("selection", e)
                }
                get selected() {
                    return this._selected
                }
            }
            const N = {
                "Acre Country": [{
                    title: "New Route",
                    items: [{
                        category: "pokeball",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Sweet Catch!",
                    items: [{
                        category: "pokeball",
                        tier: 3
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Heal Up!",
                    items: [{
                        category: "potion",
                        tier: 2
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Catch More!",
                    items: [{
                        category: "pokeball",
                        tier: 5
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Pokeball Craze",
                    items: [{
                        category: "pokeball",
                        tier: 3
                    }, {
                        category: "pokeball",
                        tier: 2
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Take A Break",
                    items: [{
                        category: "potion",
                        tier: 3
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "New Encounter",
                    items: [{
                        category: "pokeball",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Catch More!",
                    items: [{
                        category: "pokeball",
                        tier: 5
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Long Battle",
                    items: [{
                        category: "potion",
                        tier: 3
                    }, {
                        category: "pokeball",
                        tier: 5
                    }],
                    reward: [{
                        category: "experience",
                        tier: 2
                    }, {
                        category: "mayor",
                        tier: 1
                    }],
                    unlock: ["Tool Factory"]
                }, {
                    title: "Catching Time!",
                    items: [{
                        category: "pokeball",
                        tier: 5
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Stay Healthy",
                    items: [{
                        category: "potion",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 2
                    }]
                }, {
                    title: "Tricky Encounter!",
                    items: [{
                        category: "pokeball",
                        tier: 6
                    }],
                    reward: [{
                        category: "experience",
                        tier: 3
                    }]
                }, {
                    title: "Recover",
                    items: [{
                        category: "potion",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 3
                    }, {
                        category: "martChest",
                        tier: 1
                    }]
                }, {
                    title: "Legendary Catch!",
                    items: [{
                        category: "pokeball",
                        tier: 8
                    }],
                    reward: [{
                        category: "experience",
                        tier: 4
                    }]
                }, {
                    title: "Heal Up!",
                    items: [{
                        category: "potion",
                        tier: 2
                    }, {
                        category: "potion",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 3
                    }],
                    unlock: ["Acre Country Landmark Upgrade"]
                }],
                "Tool Factory": [{
                    title: "New Route",
                    items: [{
                        category: "pokeball",
                        tier: 3
                    }, {
                        category: "pokeball",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "In Need of Support",
                    items: [{
                        category: "potion",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 5
                    }],
                    reward: [{
                        category: "ruin",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 3
                    }]
                }, {
                    title: "Explore Cave",
                    items: [{
                        category: "fossil",
                        tier: 3
                    }, {
                        category: "stone",
                        tier: 1
                    }],
                    reward: [{
                        category: "ruinChest",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 1
                    }, {
                        category: "mayor",
                        tier: 1
                    }]
                }, {
                    title: "Interesting Find!",
                    items: [{
                        category: "stone",
                        tier: 2
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Clean Up Rubble",
                    items: [{
                        category: "fossil",
                        tier: 5
                    }],
                    reward: [{
                        category: "experience",
                        tier: 3
                    }]
                }, {
                    title: "Shocking Discovery!",
                    items: [{
                        category: "stone",
                        tier: 3
                    }],
                    reward: [{
                        category: "experience",
                        tier: 3
                    }]
                }, {
                    title: "Digging Further",
                    items: [{
                        category: "fossil",
                        tier: 6
                    }],
                    reward: [{
                        category: "experience",
                        tier: 4
                    }, {
                        category: "mayor",
                        tier: 1
                    }]
                }, {
                    title: "Shiny Gem!",
                    items: [{
                        category: "stone",
                        tier: 4
                    }],
                    reward: [{
                        category: "experience",
                        tier: 4
                    }, {
                        category: "ruinChest",
                        tier: 1
                    }]
                }, {
                    title: "Tough Boulder!",
                    items: [{
                        category: "fossil",
                        tier: 8
                    }],
                    reward: [{
                        category: "experience",
                        tier: 3
                    }, {
                        category: "experience",
                        tier: 4
                    }, {
                        category: "mayor",
                        tier: 1
                    }],
                    unlock: ["Market", "Tool Factory Landmark Upgrade"]
                }],
                Market: [{
                    title: "New Route",
                    items: [{
                        category: "stone",
                        tier: 2
                    }, {
                        category: "pokeball",
                        tier: 4
                    }],
                    reward: [{
                        category: "construction",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Drink Time!",
                    items: [{
                        category: "stone",
                        tier: 3
                    }, {
                        category: "drink",
                        tier: 3
                    }],
                    reward: [{
                        category: "experience",
                        tier: 2
                    }]
                }, {
                    title: "New Catch!",
                    items: [{
                        category: "stone",
                        tier: 3
                    }, {
                        category: "pokeball",
                        tier: 3
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Refreshener",
                    items: [{
                        category: "stone",
                        tier: 3
                    }, {
                        category: "drink",
                        tier: 3,
                        amount: 2
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Bedrock",
                    items: [{
                        category: "fossil",
                        tier: 1,
                        amount: 2
                    }, {
                        category: "fossil",
                        tier: 2,
                        amount: 2
                    }],
                    reward: [{
                        category: "experience",
                        tier: 1
                    }, {
                        category: "constructionChest",
                        tier: 1
                    }]
                }, {
                    title: "Juicy!",
                    items: [{
                        category: "drink",
                        tier: 5
                    }, {
                        category: "stone",
                        tier: 3
                    }],
                    reward: [{
                        category: "boxFullOfTools",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 1
                    }]
                }, {
                    title: "Soak It Up",
                    items: [{
                        category: "fossil",
                        tier: 3,
                        amount: 2
                    }, {
                        category: "drink",
                        tier: 4
                    }],
                    reward: [{
                        category: "vending",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 1
                    }, {
                        category: "mayor",
                        tier: 1
                    }]
                }, {
                    title: "Exotic Break!",
                    items: [{
                        category: "drink",
                        tier: 6
                    }],
                    reward: [{
                        category: "experience",
                        tier: 2
                    }]
                }],
                "Acre Country Landmark Upgrade": [{
                    title: "Bonus Mission 1",
                    items: [{
                        category: "potion",
                        tier: 4
                    }, {
                        category: "pokeball",
                        tier: 6
                    }],
                    reward: [{
                        category: "mayor",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 4
                    }]
                }, {
                    title: "Bonus Mission 2",
                    items: [{
                        category: "fossil",
                        tier: 7
                    }, {
                        category: "stone",
                        tier: 4,
                        amount: 2
                    }],
                    reward: [{
                        category: "mayor",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 4
                    }]
                }, {
                    title: "Bonus Mission 3",
                    items: [{
                        category: "drink",
                        tier: 7
                    }, {
                        category: "stone",
                        tier: 6
                    }],
                    reward: [{
                        category: "mayor",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 4
                    }],
                    unlock: ["Acre Country"]
                }],
                "Tool Factory Landmark Upgrade": [{
                    title: "Bonus Mission 1",
                    items: [{
                        category: "potion",
                        tier: 4
                    }, {
                        category: "fossil",
                        tier: 8
                    }],
                    reward: [{
                        category: "mayor",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 5
                    }]
                }, {
                    title: "Bonus Mission 2",
                    items: [{
                        category: "pokeball",
                        tier: 7
                    }, {
                        category: "drink",
                        tier: 5,
                        amount: 2
                    }],
                    reward: [{
                        category: "mayor",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 5
                    }]
                }, {
                    title: "Bonus Mission 3",
                    items: [{
                        category: "stone",
                        tier: 5,
                        amount: 2
                    }, {
                        category: "fossil",
                        tier: 9,
                        amount: 2
                    }],
                    reward: [{
                        category: "mayor",
                        tier: 1
                    }, {
                        category: "experience",
                        tier: 5
                    }]
                }]
            };
            class X extends Phaser.GameObjects.Container {
                constructor(e) {
                    super(e, 0, 0);
                    this.scene = e;
                    e.add.existing(this);
            
                    // Load progress from localStorage if available
                    const savedProgress = JSON.parse(localStorage.getItem("PokeMerge1Quest"));
                    this.storyProgressIndex = savedProgress || {};
            
                    // Initialize story structure
                    Object.keys(N).forEach(chapter => {
                        // Only set to -1 if not loaded from save
                        if (this.storyProgressIndex[chapter] === undefined) {
                            this.storyProgressIndex[chapter] = -1;
                        }
            
                        N[chapter].forEach(task => {
                            task.chapter = chapter;
            
                            task.items.forEach(item => {
                                item.amount = item.amount || 1;
                            });
            
                            task.reward.forEach(reward => {
                                reward.amount = reward.amount || 1;
                            });
                        });
                    });
            
                    // Optional: start Acre Country at 0 if not already started
                    if (this.storyProgressIndex["Acre Country"] === -1) {
                        this.storyProgressIndex["Acre Country"] = 0;
                    }
                }
                getCurrentTasks() {
                    let tasks = [];
                    Object.keys(this.storyProgressIndex).forEach(key => {
                        const index = this.storyProgressIndex[key];
                        if (index >= 0 && index < N[key].length) {
                            tasks.push(N[key][index]);
                        }
                    });
                    return tasks;
                }
                
                completeTask(e) {
                    const currentIndex = this.storyProgressIndex[e];
                    const currentTask = N[e][currentIndex];
                
                    // Advance to the next task
                    this.storyProgressIndex[e] += 1;
                
                    // Unlock other tasks if defined
                    if (currentTask.unlock) {
                        currentTask.unlock.forEach(unlockedKey => {
                            this.storyProgressIndex[unlockedKey] = 0;
                        });
                    }
                
                    // Emit update
                    this.emit("newTask");
                
                    // Save progress to localStorage
                    localStorage.setItem("PokeMerge1Quest", JSON.stringify(this.storyProgressIndex));
                }
            }
            const Z = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5, 1, 1, 1, 1, 1, 1, 1, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 1, 1, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 8, 9, 8, 9, 10, 11, 12, 13, 14, 8, 9, 8, 9, 8, 9, 8, 9, 4, 1, 1, 1, 6, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16, 17, 18, 17, 19, 17, 18, 17, 19, 17, 18, 18, 17, 18, 19, 17, 18, 17, 18, 17, 19, 17, 17, 20, 21, 18, 21, 18, 21, 20, 21, 22, 23, 24, 25, 24, 25, 24, 26, 27, 28, 29, 30, 25, 24, 25, 24, 25, 24, 25, 31, 32, 3, 3, 3, 4, 33, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 35, 35, 35, 37, 17, 18, 17, 18, 17, 18, 20, 38, 38, 38, 38, 38, 38, 38, 38, 17, 18, 17, 39, 40, 39, 19, 39, 40, 39, 19, 39, 40, 40, 39, 40, 19, 39, 40, 39, 40, 39, 19, 17, 18, 17, 18, 17, 18, 17, 18, 41, 18, 42, 43, 44, 45, 44, 45, 46, 47, 48, 49, 50, 51, 45, 44, 45, 44, 45, 44, 45, 52, 53, 54, 54, 55, 33, 6, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 35, 35, 35, 37, 39, 41, 39, 40, 39, 40, 20, 38, 38, 38, 38, 38, 38, 38, 38, 39, 40, 39, 17, 18, 17, 20, 17, 18, 17, 20, 17, 17, 18, 17, 18, 19, 19, 19, 20, 19, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 20, 56, 57, 57, 57, 57, 57, 58, 59, 60, 61, 62, 63, 57, 57, 57, 57, 57, 57, 57, 22, 64, 65, 66, 67, 33, 1, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 2, 68, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 35, 35, 35, 37, 17, 18, 17, 18, 17, 18, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 20, 19, 20, 19, 20, 19, 39, 40, 39, 40, 19, 17, 18, 17, 19, 17, 18, 17, 18, 20, 19, 20, 21, 20, 21, 20, 18, 17, 17, 18, 17, 17, 17, 18, 17, 69, 70, 71, 18, 17, 18, 18, 17, 18, 17, 18, 42, 64, 72, 72, 67, 6, 4, 6, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 73, 74, 74, 74, 75, 35, 35, 76, 74, 74, 74, 77, 35, 35, 35, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 19, 19, 20, 20, 19, 19, 20, 17, 18, 17, 19, 20, 19, 19, 20, 19, 39, 40, 39, 20, 39, 40, 39, 40, 20, 19, 21, 20, 21, 20, 20, 20, 18, 17, 20, 17, 18, 81, 82, 82, 70, 70, 70, 82, 82, 83, 20, 17, 20, 17, 20, 42, 64, 72, 72, 84, 55, 6, 3, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 85, 86, 86, 86, 87, 20, 17, 18, 19, 39, 17, 18, 19, 17, 18, 17, 18, 19, 17, 18, 17, 20, 17, 20, 19, 19, 17, 18, 20, 18, 17, 18, 17, 18, 17, 17, 18, 17, 17, 88, 89, 89, 89, 89, 89, 89, 89, 90, 18, 17, 18, 17, 18, 42, 64, 72, 72, 66, 84, 54, 55, 6, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 19, 39, 40, 19, 19, 39, 40, 19, 39, 40, 17, 18, 17, 39, 40, 39, 39, 39, 39, 19, 41, 20, 18, 20, 17, 18, 17, 18, 20, 18, 20, 18, 20, 18, 17, 18, 17, 18, 18, 17, 18, 17, 18, 20, 17, 20, 17, 20, 42, 64, 72, 72, 72, 72, 66, 84, 54, 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 92, 92, 92, 92, 92, 92, 92, 93, 35, 94, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 95, 19, 17, 18, 20, 39, 20, 20, 19, 20, 19, 39, 40, 39, 40, 39, 17, 20, 17, 20, 19, 20, 21, 18, 21, 17, 21, 20, 17, 20, 18, 96, 97, 97, 97, 97, 98, 99, 100, 100, 100, 101, 96, 97, 97, 97, 97, 98, 18, 42, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 102, 103, 103, 103, 103, 103, 103, 103, 103, 103, 104, 23, 24, 25, 24, 25, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 105, 21, 20, 21, 39, 39, 39, 40, 106, 35, 91, 107, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 110, 110, 111, 112, 112, 112, 112, 113, 114, 115, 115, 115, 116, 111, 112, 112, 112, 112, 113, 20, 42, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 118, 117, 118, 117, 119, 102, 103, 103, 103, 103, 103, 103, 103, 103, 103, 104, 120, 118, 117, 118, 117, 118, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 105, 20, 21, 18, 18, 40, 17, 18, 106, 35, 91, 121, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 20, 20, 111, 112, 112, 112, 112, 113, 122, 123, 123, 123, 124, 111, 112, 112, 112, 112, 113, 18, 42, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 102, 103, 103, 103, 103, 103, 103, 103, 103, 103, 104, 23, 24, 25, 24, 25, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 105, 21, 40, 40, 39, 40, 39, 40, 106, 35, 91, 121, 39, 40, 39, 125, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 39, 20, 128, 128, 128, 128, 128, 128, 39, 17, 20, 17, 20, 128, 128, 128, 128, 128, 128, 20, 42, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 118, 117, 118, 117, 119, 129, 130, 130, 130, 130, 130, 130, 130, 130, 130, 131, 120, 118, 117, 118, 117, 118, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 5, 105, 39, 21, 18, 17, 18, 18, 40, 106, 35, 91, 121, 17, 18, 17, 132, 1, 133, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 135, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 133, 134, 134, 134, 134, 134, 134, 134, 135, 1, 1, 1, 1, 1, 1, 1, 105, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 136, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 137, 138, 139, 140, 141, 142, 143, 140, 139, 144, 145, 23, 24, 25, 24, 25, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 21, 20, 18, 39, 40, 40, 18, 106, 35, 91, 121, 39, 40, 39, 132, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 134, 134, 134, 134, 134, 134, 134, 134, 134, 135, 1, 1, 1, 1, 1, 1, 33, 1, 1, 1, 1, 1, 1, 1, 146, 134, 134, 134, 135, 1, 1, 1, 105, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 118, 117, 118, 117, 119, 148, 149, 150, 149, 151, 152, 153, 149, 150, 149, 154, 120, 118, 117, 118, 117, 118, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 18, 40, 39, 18, 40, 18, 40, 106, 35, 91, 121, 17, 18, 17, 132, 133, 155, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 134, 134, 134, 134, 134, 134, 155, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 134, 134, 135, 15, 64, 156, 65, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 157, 158, 159, 160, 161, 162, 163, 160, 159, 158, 164, 23, 24, 25, 24, 25, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 20, 39, 40, 53, 54, 165, 57, 106, 35, 91, 166, 39, 40, 39, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 64, 65, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 118, 117, 118, 117, 119, 40, 167, 168, 20, 169, 170, 171, 20, 168, 167, 39, 120, 118, 117, 118, 117, 118, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 18, 17, 18, 64, 156, 67, 172, 173, 174, 175, 176, 17, 18, 17, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 167, 17, 18, 18, 177, 178, 179, 17, 18, 17, 167, 23, 24, 25, 24, 25, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 20, 39, 40, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 118, 117, 118, 45, 52, 167, 18, 185, 40, 186, 187, 188, 18, 185, 18, 167, 45, 44, 117, 118, 117, 118, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 31, 17, 18, 167, 40, 168, 18, 186, 187, 188, 17, 168, 17, 167, 17, 18, 23, 24, 25, 24, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 132, 33, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [45, 44, 45, 52, 39, 40, 167, 18, 20, 40, 186, 187, 188, 18, 20, 18, 167, 39, 40, 45, 44, 45, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 132, 33, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 3, 3, 3, 3, 4, 17, 167, 185, 20, 191, 192, 193, 20, 185, 167, 18, 2, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 132, 6, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 33, 39, 40, 168, 194, 195, 196, 197, 198, 168, 39, 40, 15, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 132, 1, 33, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 6, 3, 3, 3, 199, 200, 201, 202, 203, 3, 3, 3, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 132, 1, 33, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 3, 3, 3, 4, 1, 1, 1, 1, 204, 205, 206, 206, 207, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 32, 4, 6, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 6, 3, 3, 3, 3, 208, 209, 210, 210, 208, 3, 3, 3, 3, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 211, 32, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 3, 3, 4, 1, 1, 1, 1, 1, 212, 213, 214, 215, 216, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 1, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 53, 54, 54, 54, 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 6, 3, 3, 3, 3, 3, 199, 200, 201, 202, 203, 3, 3, 3, 3, 3, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 146, 135, 105, 38, 38, 38, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 42, 64, 156, 65, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 204, 205, 206, 206, 207, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 64, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 2, 7, 7, 217, 209, 210, 210, 217, 7, 7, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 105, 38, 38, 38, 64, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 42, 64, 65, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [8, 9, 8, 9, 8, 9, 16, 218, 219, 220, 221, 222, 222, 220, 219, 223, 32, 7, 8, 9, 8, 9, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 105, 38, 38, 38, 64, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 224, 187, 225, 187, 187, 187, 187, 187, 187, 187, 219, 226, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 146, 127, 53, 54, 147, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 118, 117, 118, 117, 119, 227, 187, 225, 225, 187, 187, 225, 187, 225, 187, 187, 228, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 1, 15, 64, 156, 156, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 24, 25, 24, 25, 31, 186, 225, 187, 225, 187, 187, 225, 187, 225, 187, 225, 228, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 1, 15, 64, 156, 156, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 229, 230, 231, 232, 227, 187, 187, 187, 225, 187, 187, 225, 187, 187, 225, 228, 229, 230, 231, 232, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 146, 135, 15, 64, 156, 156, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 233, 234, 235, 233, 225, 187, 187, 187, 225, 187, 187, 225, 187, 187, 187, 225, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 156, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 233, 234, 235, 233, 187, 187, 225, 187, 225, 187, 225, 187, 187, 187, 187, 187, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 156, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 233, 234, 235, 233, 187, 187, 225, 187, 225, 187, 225, 187, 187, 187, 225, 187, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 156, 156, 67, 180, 181, 182, 183, 184, 39, 40, 39, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 233, 234, 235, 233, 225, 187, 187, 225, 187, 225, 187, 225, 187, 187, 225, 187, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 156, 156, 67, 189, 181, 182, 183, 190, 17, 18, 17, 42, 64, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 233, 234, 235, 233, 225, 187, 187, 225, 187, 225, 187, 225, 187, 187, 225, 187, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 15, 64, 156, 156, 156, 67, 180, 181, 182, 183, 184, 17, 18, 17, 42, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 233, 234, 235, 233, 187, 225, 187, 187, 225, 187, 187, 225, 187, 187, 187, 187, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 64, 156, 156, 156, 67, 189, 181, 182, 183, 236, 79, 79, 80, 42, 64, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 233, 234, 235, 233, 225, 225, 225, 187, 225, 187, 187, 225, 187, 225, 187, 187, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 238, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 156, 156, 156, 67, 180, 181, 182, 183, 184, 18, 17, 18, 42, 64, 156, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 233, 234, 235, 233, 225, 187, 225, 187, 225, 187, 187, 225, 187, 225, 187, 187, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 189, 181, 182, 183, 190, 40, 39, 40, 42, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 239, 240, 239, 240, 239, 240, 239, 240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 241, 242, 243, 241, 225, 187, 225, 187, 225, 187, 187, 225, 187, 225, 187, 225, 241, 242, 243, 241, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 244, 245, 246, 246, 247, 18, 17, 18, 248, 249, 249, 249, 249, 249, 249, 249, 249, 249, 250, 251, 252, 251, 252, 251, 252, 251, 252, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 253, 254, 255, 253, 225, 187, 225, 187, 187, 187, 187, 187, 187, 225, 187, 225, 253, 254, 255, 253, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 256, 257, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 57, 39, 40, 39, 19, 40, 39, 40, 42, 99, 100, 100, 100, 100, 100, 100, 101, 20, 42, 120, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 168, 186, 187, 168, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 168, 187, 188, 168, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 67, 258, 17, 18, 17, 18, 17, 18, 17, 20, 21, 20, 21, 20, 21, 19, 17, 18, 17, 19, 18, 17, 18, 42, 114, 115, 115, 115, 115, 115, 115, 116, 20, 42, 23, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 18, 191, 192, 192, 192, 192, 187, 187, 187, 187, 187, 187, 187, 187, 187, 192, 192, 192, 193, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 67, 258, 20, 99, 100, 101, 20, 17, 20, 17, 20, 21, 20, 21, 20, 19, 39, 40, 39, 19, 40, 39, 40, 42, 114, 115, 259, 123, 123, 260, 115, 116, 261, 262, 263, 264, 263, 265, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 39, 41, 17, 18, 17, 18, 191, 192, 192, 192, 192, 192, 192, 192, 193, 18, 17, 18, 17, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 67, 258, 266, 267, 268, 269, 270, 270, 271, 266, 270, 270, 270, 270, 271, 19, 17, 18, 17, 18, 17, 18, 261, 272, 267, 268, 269, 270, 271, 114, 115, 116, 273, 274, 274, 274, 274, 275, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 15, 15, 64, 156, 67, 258, 273, 274, 274, 274, 274, 274, 275, 273, 274, 274, 274, 274, 275, 19, 39, 40, 39, 40, 39, 40, 273, 274, 274, 274, 274, 274, 275, 114, 115, 116, 276, 277, 277, 277, 277, 278, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 31, 125, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 17, 18, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 15, 64, 156, 67, 258, 276, 279, 280, 281, 277, 277, 278, 276, 279, 280, 281, 277, 278, 19, 17, 18, 17, 18, 17, 18, 276, 279, 280, 281, 277, 277, 278, 114, 115, 116, 282, 283, 284, 285, 286, 287, 23, 24, 25, 24, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 133, 134, 134, 135, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 133, 134, 134, 134, 134, 134, 135, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1], [117, 119, 132, 133, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 135, 105, 39, 40, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 15, 2, 288, 289, 290, 291, 292, 4, 33, 1, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 1, 1, 15, 1, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 3, 7, 4, 6, 3, 3, 3, 3, 3, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 4, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 15, 64, 156, 67, 258, 282, 293, 61, 294, 283, 284, 287, 282, 293, 61, 295, 286, 287, 19, 39, 40, 39, 40, 39, 40, 282, 293, 61, 294, 283, 284, 287, 114, 115, 116, 39, 40, 39, 22, 296, 297, 120, 118, 117, 118, 296, 297, 296, 297, 296, 297, 298, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 125, 126, 126, 126, 126, 127, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 15, 105, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 106, 35, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 1, 15, 15, 238, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 55, 33, 1], [25, 31, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 17, 18, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 5, 105, 300, 301, 302, 303, 304, 132, 33, 1, 1, 6, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 5, 1, 1, 1, 1, 1, 15, 1, 105, 17, 18, 37, 18, 17, 18, 17, 18, 17, 305, 18, 32, 3, 7, 7, 7, 7, 7, 7, 16, 18, 37, 17, 18, 17, 18, 17, 37, 32, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16, 18, 17, 18, 17, 114, 115, 115, 115, 115, 115, 115, 306, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 307, 3, 16, 64, 156, 67, 258, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 19, 114, 115, 116, 17, 18, 17, 42, 23, 31, 23, 24, 25, 24, 23, 31, 23, 31, 23, 31, 258, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 132, 133, 134, 134, 135, 105, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 15, 105, 41, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 106, 35, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 1, 15, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 33, 1], [117, 119, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 17, 18, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 2, 7, 7, 7, 7, 7, 7, 16, 308, 309, 310, 311, 312, 132, 6, 4, 1, 1, 1, 1, 1, 33, 1, 1, 1, 1, 2, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 1, 105, 39, 40, 37, 40, 39, 40, 39, 40, 39, 305, 40, 40, 305, 20, 21, 20, 21, 20, 37, 18, 17, 37, 39, 40, 39, 40, 39, 37, 21, 18, 21, 20, 39, 20, 39, 18, 17, 18, 17, 18, 17, 18, 17, 40, 39, 40, 39, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 18, 64, 156, 67, 258, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 19, 114, 115, 116, 39, 40, 39, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 125, 126, 126, 126, 127, 20, 17, 18, 17, 18, 17, 18, 132, 33, 1, 1, 15, 105, 17, 18, 17, 18, 17, 18, 132, 6, 3, 3, 5, 105, 18, 17, 18, 17, 40, 39, 20, 20, 20, 20, 125, 313, 314, 314, 315, 35, 35, 299, 33, 1, 1, 1, 1, 1, 15, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 33, 1], [25, 31, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 39, 40, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 316, 18, 41, 18, 316, 20, 20, 317, 318, 319, 320, 321, 32, 4, 6, 3, 3, 3, 3, 4, 33, 1, 1, 1, 1, 15, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 2, 7, 16, 17, 18, 37, 18, 17, 18, 17, 18, 17, 305, 20, 20, 305, 21, 20, 21, 20, 21, 37, 40, 39, 37, 17, 18, 17, 18, 17, 37, 40, 21, 18, 21, 20, 40, 17, 40, 39, 40, 39, 40, 39, 40, 39, 18, 17, 18, 17, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 20, 64, 156, 67, 258, 114, 115, 259, 123, 123, 322, 323, 323, 323, 323, 323, 324, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 19, 114, 115, 116, 17, 18, 17, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 133, 134, 135, 73, 79, 79, 79, 79, 80, 39, 40, 132, 33, 1, 1, 15, 325, 79, 80, 20, 20, 326, 79, 327, 1, 1, 1, 1, 325, 79, 80, 20, 20, 326, 79, 79, 79, 79, 79, 327, 133, 134, 135, 73, 74, 74, 328, 6, 3, 4, 1, 1, 1, 15, 105, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 329, 330, 156, 67, 33, 1], [117, 119, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 146, 127, 20, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 86, 87, 316, 17, 18, 17, 20, 331, 332, 333, 334, 335, 336, 337, 7, 7, 307, 7, 4, 33, 6, 4, 1, 1, 2, 5, 15, 2, 7, 307, 7, 7, 7, 7, 7, 7, 7, 16, 17, 18, 39, 40, 78, 79, 80, 17, 18, 326, 79, 338, 20, 20, 305, 40, 20, 20, 17, 17, 37, 18, 17, 37, 39, 40, 39, 40, 39, 78, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 211, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 39, 40, 39, 20, 64, 156, 67, 258, 114, 115, 116, 40, 39, 273, 274, 274, 274, 274, 274, 275, 339, 340, 341, 342, 343, 39, 40, 39, 40, 39, 40, 39, 40, 39, 19, 114, 115, 116, 39, 40, 39, 42, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 258, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 15, 34, 35, 35, 35, 85, 86, 86, 86, 344, 6, 3, 3, 5, 34, 85, 86, 86, 86, 86, 345, 337, 7, 7, 7, 7, 68, 85, 86, 86, 86, 86, 345, 35, 35, 35, 35, 299, 33, 1, 15, 34, 35, 35, 299, 1, 1, 33, 1, 1, 1, 15, 105, 57, 57, 20, 18, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 22, 64, 156, 67, 33, 1], [25, 31, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 127, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 85, 86, 86, 86, 87, 17, 18, 18, 17, 18, 336, 345, 35, 35, 35, 35, 35, 299, 6, 4, 33, 1, 1, 15, 2, 5, 34, 35, 35, 35, 35, 35, 35, 35, 35, 91, 17, 39, 40, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 305, 40, 17, 18, 17, 39, 37, 40, 39, 37, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 42, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 156, 67, 258, 114, 115, 116, 326, 79, 276, 279, 280, 281, 277, 277, 278, 300, 301, 302, 303, 304, 17, 18, 17, 18, 17, 18, 17, 18, 17, 19, 114, 115, 116, 17, 18, 17, 42, 20, 20, 20, 20, 20, 20, 20, 20, 20, 40, 39, 40, 258, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 132, 33, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 299, 1, 1, 1, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 15, 34, 35, 35, 299, 1, 1, 6, 3, 3, 3, 5, 105, 17, 18, 17, 40, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 18, 42, 64, 156, 67, 33, 1], [117, 119, 132, 6, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 2, 3, 3, 3, 5, 105, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 73, 74, 74, 74, 74, 75, 85, 86, 86, 86, 86, 86, 345, 35, 35, 35, 346, 35, 35, 337, 4, 33, 33, 1, 1, 15, 15, 2, 68, 35, 94, 92, 346, 92, 92, 92, 92, 95, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 305, 18, 39, 40, 39, 17, 37, 18, 17, 78, 80, 20, 20, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 42, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 258, 114, 115, 116, 40, 39, 282, 293, 61, 294, 283, 284, 287, 308, 309, 310, 311, 312, 39, 40, 39, 347, 348, 348, 348, 348, 348, 349, 114, 115, 116, 39, 39, 40, 56, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 350, 326, 79, 79, 79, 79, 79, 79, 80, 316, 17, 18, 132, 33, 1, 15, 34, 35, 35, 35, 35, 35, 35, 346, 337, 7, 7, 7, 7, 68, 351, 314, 314, 314, 315, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 6, 3, 5, 34, 35, 35, 337, 7, 7, 7, 7, 7, 7, 7, 68, 86, 87, 40, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 40, 42, 64, 156, 67, 33, 1], [25, 31, 32, 352, 7, 307, 7, 352, 7, 4, 33, 1, 1, 1, 1, 15, 2, 7, 307, 7, 16, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 353, 299, 33, 33, 1, 1, 15, 15, 34, 92, 92, 95, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 305, 40, 17, 18, 17, 39, 37, 40, 39, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 20, 18, 17, 18, 17, 18, 17, 296, 297, 296, 297, 20, 18, 17, 18, 17, 18, 17, 42, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 258, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 101, 317, 318, 319, 320, 321, 79, 79, 79, 355, 356, 356, 356, 356, 356, 357, 114, 115, 116, 39, 40, 39, 40, 39, 40, 39, 40, 39, 20, 17, 18, 20, 17, 18, 17, 18, 336, 345, 35, 35, 35, 35, 85, 87, 125, 126, 126, 155, 33, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 133, 134, 135, 358, 35, 35, 35, 35, 351, 314, 314, 314, 315, 35, 35, 35, 351, 314, 314, 314, 315, 337, 7, 7, 7, 68, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 85, 87, 40, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 18, 42, 64, 156, 67, 33, 1], [117, 119, 41, 168, 218, 219, 223, 168, 316, 132, 33, 1, 1, 1, 1, 15, 105, 40, 18, 40, 18, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 76, 74, 74, 74, 74, 74, 74, 328, 33, 33, 1, 1, 15, 15, 325, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 40, 39, 40, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 338, 18, 99, 100, 101, 17, 78, 79, 359, 40, 40, 39, 40, 39, 40, 39, 296, 297, 296, 297, 40, 39, 40, 39, 20, 18, 17, 18, 17, 18, 17, 23, 31, 23, 31, 326, 79, 79, 79, 79, 79, 80, 56, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 249, 350, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 331, 332, 333, 334, 335, 39, 40, 39, 360, 361, 361, 361, 361, 361, 362, 114, 115, 116, 17, 18, 17, 18, 17, 18, 17, 18, 17, 20, 39, 40, 22, 39, 40, 39, 40, 106, 35, 35, 35, 35, 35, 35, 85, 344, 133, 134, 134, 155, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 15, 34, 35, 35, 35, 35, 299, 133, 134, 135, 34, 35, 35, 35, 299, 133, 134, 135, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 40, 42, 64, 156, 67, 33, 1], [25, 31, 40, 18, 186, 187, 188, 40, 18, 132, 33, 1, 1, 1, 1, 15, 105, 39, 40, 39, 40, 39, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 363, 364, 365, 364, 365, 364, 365, 364, 365, 364, 366, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 353, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 6, 3, 3, 5, 15, 105, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 40, 39, 40, 39, 40, 39, 40, 39, 40, 20, 39, 114, 115, 116, 20, 20, 20, 78, 79, 79, 79, 79, 80, 20, 20, 23, 31, 23, 31, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 120, 118, 117, 119, 18, 17, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 259, 123, 123, 123, 123, 123, 123, 260, 115, 116, 17, 18, 17, 18, 17, 17, 18, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 17, 18, 211, 57, 57, 57, 57, 57, 57, 57, 57, 56, 57, 379, 125, 126, 313, 314, 314, 315, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 15, 73, 74, 74, 74, 74, 74, 74, 74, 74, 74, 74, 380, 92, 92, 381, 33, 1, 15, 34, 92, 92, 92, 92, 381, 33, 1, 15, 34, 92, 92, 92, 381, 33, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 94, 95, 40, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 18, 42, 64, 156, 67, 33, 1], [117, 119, 40, 346, 186, 187, 188, 39, 316, 132, 33, 1, 1, 1, 1, 15, 105, 21, 17, 39, 18, 39, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 382, 383, 383, 383, 383, 383, 383, 383, 383, 383, 384, 385, 386, 385, 386, 387, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 73, 74, 74, 74, 74, 74, 74, 74, 74, 75, 35, 35, 35, 35, 35, 35, 35, 35, 353, 35, 299, 33, 1, 1, 1, 1, 15, 105, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 17, 18, 17, 18, 17, 18, 17, 18, 18, 99, 100, 100, 100, 100, 100, 100, 367, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 18, 120, 118, 117, 119, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 25, 31, 40, 39, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 17, 20, 21, 20, 21, 20, 114, 115, 116, 39, 40, 39, 40, 39, 39, 40, 388, 389, 390, 391, 162, 392, 393, 394, 114, 115, 116, 258, 39, 40, 42, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 258, 132, 133, 134, 134, 135, 73, 74, 74, 74, 74, 328, 6, 3, 3, 3, 3, 5, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 17, 18, 132, 6, 3, 5, 325, 79, 79, 79, 79, 327, 6, 3, 5, 325, 79, 80, 20, 132, 33, 1, 15, 34, 35, 35, 35, 351, 314, 314, 314, 315, 35, 35, 35, 351, 314, 314, 314, 395, 92, 95, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 40, 42, 64, 156, 67, 33, 1], [25, 31, 18, 39, 186, 187, 188, 40, 18, 132, 33, 1, 1, 1, 1, 15, 105, 40, 21, 18, 21, 39, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 396, 397, 397, 397, 398, 21, 39, 21, 399, 400, 400, 400, 400, 400, 400, 400, 400, 400, 401, 400, 400, 400, 400, 402, 403, 20, 21, 20, 21, 396, 397, 397, 397, 398, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 76, 74, 74, 74, 74, 74, 74, 328, 33, 1, 1, 1, 1, 15, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 39, 40, 39, 40, 296, 297, 296, 297, 40, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 40, 23, 24, 25, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 43, 44, 117, 119, 18, 17, 114, 115, 259, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 260, 115, 116, 39, 21, 20, 21, 20, 21, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 116, 258, 17, 18, 42, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 258, 132, 33, 1, 1, 15, 34, 35, 35, 35, 35, 337, 7, 7, 7, 7, 7, 7, 68, 35, 35, 35, 35, 35, 35, 35, 35, 35, 94, 95, 39, 40, 32, 7, 7, 7, 16, 39, 39, 40, 39, 32, 7, 7, 7, 16, 39, 40, 39, 132, 33, 1, 15, 73, 74, 74, 74, 328, 133, 134, 135, 73, 74, 74, 74, 328, 133, 134, 135, 325, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 20, 20, 57, 404, 64, 156, 67, 33, 1], [117, 119, 316, 39, 186, 187, 188, 39, 40, 132, 33, 1, 1, 1, 1, 15, 146, 126, 126, 126, 126, 127, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 405, 406, 406, 406, 407, 39, 21, 39, 408, 409, 409, 409, 409, 409, 409, 409, 409, 409, 410, 411, 411, 412, 411, 413, 414, 21, 20, 21, 396, 415, 406, 406, 406, 407, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 146, 314, 314, 315, 35, 353, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 146, 134, 134, 134, 134, 134, 135, 1, 1, 1, 1, 1, 146, 126, 126, 126, 127, 23, 31, 23, 31, 18, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 40, 120, 118, 117, 119, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 31, 40, 39, 114, 115, 116, 18, 17, 211, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 379, 17, 114, 115, 116, 18, 418, 419, 420, 421, 20, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 258, 39, 40, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 132, 33, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 18, 17, 18, 17, 18, 17, 17, 18, 17, 17, 18, 17, 17, 18, 17, 18, 17, 17, 18, 17, 132, 6, 3, 5, 34, 92, 92, 92, 381, 33, 1, 15, 34, 35, 35, 35, 299, 33, 1, 15, 105, 20, 18, 20, 18, 20, 18, 20, 18, 20, 18, 20, 18, 20, 18, 20, 18, 42, 64, 156, 67, 33, 1], [25, 31, 39, 185, 186, 187, 188, 185, 316, 132, 33, 1, 1, 1, 1, 146, 134, 134, 135, 1, 1, 105, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 422, 423, 423, 423, 424, 20, 39, 21, 425, 426, 426, 426, 427, 428, 429, 430, 430, 430, 431, 432, 433, 434, 432, 435, 436, 437, 437, 437, 422, 438, 406, 406, 439, 424, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 146, 134, 135, 1, 146, 314, 315, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 353, 299, 33, 1, 1, 1, 1, 133, 134, 134, 134, 134, 135, 146, 134, 134, 134, 134, 135, 1, 1, 1, 1, 105, 43, 44, 45, 52, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 296, 297, 23, 24, 25, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 120, 119, 326, 80, 114, 115, 116, 326, 80, 42, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 258, 39, 114, 115, 116, 40, 440, 441, 441, 442, 17, 114, 115, 259, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 258, 17, 18, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 132, 33, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 351, 314, 314, 314, 314, 395, 95, 20, 39, 40, 39, 40, 39, 39, 40, 39, 39, 40, 39, 39, 40, 39, 40, 39, 39, 40, 39, 132, 1, 1, 1, 105, 17, 18, 17, 132, 6, 3, 5, 34, 92, 92, 92, 381, 33, 1, 15, 105, 17, 40, 17, 40, 17, 40, 17, 40, 17, 40, 17, 40, 17, 40, 17, 40, 42, 64, 156, 67, 33, 1], [117, 119, 316, 168, 186, 187, 188, 168, 39, 132, 33, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 105, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 20, 39, 20, 39, 20, 39, 20, 39, 443, 444, 444, 444, 445, 446, 447, 432, 432, 432, 435, 20, 18, 17, 18, 20, 20, 18, 17, 18, 20, 422, 423, 423, 424, 20, 43, 44, 117, 118, 117, 118, 117, 118, 117, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 146, 134, 134, 135, 73, 74, 74, 75, 35, 35, 35, 35, 35, 35, 35, 353, 351, 314, 314, 155, 33, 1, 1, 1, 1, 33, 1, 1, 1, 1, 146, 134, 134, 134, 134, 135, 15, 1, 1, 1, 1, 146, 126, 126, 126, 127, 326, 80, 20, 20, 326, 79, 79, 79, 79, 79, 79, 79, 80, 20, 20, 326, 79, 79, 79, 80, 23, 24, 117, 118, 117, 119, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 31, 18, 17, 114, 115, 116, 18, 17, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 17, 114, 115, 448, 449, 440, 441, 441, 442, 17, 114, 115, 116, 346, 261, 450, 451, 450, 451, 452, 453, 454, 455, 456, 261, 450, 451, 450, 452, 39, 40, 258, 39, 40, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 132, 33, 1, 1, 15, 73, 74, 74, 74, 74, 74, 74, 74, 74, 75, 35, 35, 76, 74, 74, 74, 328, 133, 134, 134, 135, 325, 79, 80, 17, 17, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 32, 7, 7, 7, 16, 326, 79, 80, 32, 7, 7, 7, 16, 326, 79, 79, 327, 33, 1, 15, 146, 126, 126, 126, 126, 126, 126, 126, 126, 127, 18, 20, 18, 20, 18, 20, 18, 42, 64, 156, 67, 33, 1], [25, 31, 40, 18, 186, 187, 188, 40, 316, 132, 33, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 105, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 437, 437, 437, 20, 17, 20, 39, 20, 19, 19, 19, 19, 457, 458, 459, 19, 19, 19, 19, 20, 20, 437, 437, 437, 437, 437, 437, 437, 18, 17, 18, 20, 20, 18, 20, 18, 23, 24, 25, 24, 25, 24, 25, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 351, 314, 314, 155, 133, 134, 134, 155, 1, 1, 1, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 146, 134, 135, 1, 1, 1, 1, 1, 1, 105, 20, 21, 20, 21, 20, 18, 20, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 120, 118, 25, 24, 25, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 18, 43, 52, 40, 39, 122, 123, 124, 40, 39, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 39, 114, 115, 448, 449, 460, 461, 461, 462, 39, 114, 115, 116, 20, 273, 274, 274, 274, 274, 275, 463, 464, 465, 466, 273, 274, 274, 274, 275, 17, 18, 258, 17, 18, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 132, 33, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 1, 15, 105, 18, 17, 39, 18, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 132, 33, 1, 146, 134, 134, 134, 134, 134, 134, 134, 134, 135, 105, 339, 340, 341, 342, 343, 17, 40, 42, 64, 156, 67, 33, 1], [117, 119, 39, 40, 186, 187, 188, 39, 40, 132, 6, 4, 1, 1, 1, 1, 1, 1, 15, 1, 1, 105, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 326, 79, 80, 20, 39, 326, 79, 79, 79, 79, 79, 79, 467, 468, 469, 346, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 20, 20, 20, 120, 118, 117, 118, 117, 118, 117, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 299, 133, 134, 134, 155, 1, 1, 1, 1, 1, 1, 133, 155, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 15, 1, 1, 1, 1, 1, 1, 105, 21, 20, 21, 20, 21, 20, 21, 20, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 41, 40, 23, 24, 45, 44, 45, 52, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 18, 17, 18, 17, 18, 17, 18, 17, 18, 20, 20, 136, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 119, 258, 17, 114, 115, 448, 449, 470, 471, 471, 472, 18, 114, 115, 116, 20, 276, 279, 280, 281, 277, 278, 473, 474, 475, 476, 276, 277, 277, 277, 278, 39, 40, 258, 39, 40, 42, 120, 118, 117, 118, 117, 118, 117, 118, 45, 52, 477, 132, 33, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 1, 15, 105, 40, 39, 39, 40, 39, 40, 39, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 300, 301, 302, 303, 304, 20, 18, 42, 64, 156, 67, 33, 1], [25, 31, 40, 316, 186, 187, 188, 40, 316, 132, 1, 33, 1, 1, 1, 1, 1, 1, 15, 1, 1, 105, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 17, 20, 478, 479, 479, 479, 479, 479, 479, 479, 479, 479, 480, 481, 482, 479, 479, 479, 479, 479, 483, 17, 20, 17, 20, 21, 20, 21, 484, 485, 485, 485, 486, 478, 479, 483, 23, 24, 25, 24, 25, 24, 25, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 76, 74, 74, 328, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 15, 1, 1, 1, 1, 1, 1, 146, 126, 126, 126, 126, 126, 126, 127, 20, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 43, 52, 125, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 40, 39, 40, 39, 40, 39, 40, 39, 40, 125, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 25, 24, 25, 24, 25, 31, 258, 39, 114, 115, 116, 346, 487, 488, 488, 489, 17, 114, 115, 116, 20, 282, 293, 61, 295, 286, 287, 490, 491, 333, 492, 282, 283, 493, 286, 287, 17, 18, 258, 17, 18, 42, 23, 24, 25, 24, 25, 24, 25, 31, 125, 126, 126, 155, 6, 3, 3, 5, 146, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 155, 33, 1, 1, 15, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 155, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 105, 308, 309, 310, 311, 312, 17, 40, 42, 64, 156, 67, 33, 1], [117, 119, 39, 40, 186, 187, 188, 17, 316, 132, 1, 6, 3, 3, 3, 3, 3, 3, 5, 1, 1, 105, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 296, 297, 494, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 495, 18, 20, 20, 21, 20, 21, 17, 496, 497, 497, 497, 498, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 155, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 155, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 117, 118, 117, 118, 117, 119, 258, 17, 114, 115, 354, 100, 499, 100, 100, 500, 100, 367, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 258, 39, 40, 42, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 3, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 7, 7, 7, 7, 7, 7, 307, 7, 16, 317, 318, 319, 320, 321, 20, 18, 42, 64, 156, 67, 33, 1], [25, 31, 316, 185, 186, 187, 188, 185, 40, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 23, 31, 494, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 495, 17, 20, 17, 20, 17, 20, 20, 501, 502, 503, 504, 505, 494, 481, 495, 23, 24, 25, 24, 25, 24, 25, 31, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 39, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 258, 17, 18, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 35, 94, 92, 95, 20, 331, 332, 333, 334, 335, 17, 40, 42, 64, 156, 67, 33, 1], [117, 119, 17, 168, 186, 187, 188, 168, 18, 32, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 494, 481, 506, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 508, 481, 495, 18, 20, 18, 20, 18, 20, 20, 509, 434, 510, 511, 512, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 119, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 17, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 258, 39, 40, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 513, 513, 513, 346, 57, 19, 20, 336, 86, 86, 86, 87, 20, 18, 42, 64, 156, 67, 33, 1], [25, 31, 316, 18, 191, 192, 193, 40, 18, 40, 316, 316, 316, 38, 38, 38, 38, 17, 18, 316, 18, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 494, 481, 495, 296, 297, 18, 347, 348, 348, 348, 348, 348, 349, 18, 296, 297, 494, 481, 482, 479, 479, 479, 479, 479, 479, 479, 479, 481, 479, 479, 479, 480, 481, 495, 23, 24, 25, 24, 25, 24, 25, 31, 132, 33, 1, 1, 1, 1, 1, 1, 1, 2, 3, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 6, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 34, 93, 35, 35, 35, 35, 35, 94, 92, 381, 33, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 514, 108, 108, 108, 108, 108, 108, 108, 108, 109, 57, 57, 515, 57, 57, 57, 57, 57, 57, 20, 514, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 350, 17, 18, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 94, 95, 20, 18, 20, 106, 35, 35, 35, 91, 17, 40, 42, 64, 156, 67, 33, 1], [117, 119, 39, 316, 40, 39, 40, 39, 40, 39, 18, 316, 316, 38, 38, 38, 17, 39, 40, 39, 40, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 494, 481, 495, 23, 31, 40, 355, 356, 356, 356, 356, 356, 357, 40, 23, 31, 494, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 495, 120, 118, 117, 118, 117, 118, 117, 119, 132, 33, 1, 1, 1, 1, 1, 1, 1, 15, 2, 7, 68, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 337, 7, 4, 33, 1, 1, 2, 3, 3, 3, 3, 3, 5, 1, 1, 1, 1, 1, 1, 1, 6, 3, 3, 3, 3, 4, 1, 1, 1, 1, 1, 15, 105, 516, 93, 35, 35, 94, 92, 95, 125, 155, 33, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 18, 17, 18, 17, 18, 17, 18, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 91, 20, 17, 40, 19, 516, 92, 92, 92, 95, 20, 18, 42, 64, 156, 67, 33, 1], [25, 31, 517, 518, 519, 517, 39, 40, 18, 40, 40, 316, 316, 38, 38, 38, 39, 40, 39, 40, 39, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 494, 481, 495, 120, 119, 437, 360, 361, 361, 361, 361, 361, 362, 437, 120, 119, 494, 481, 506, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 508, 481, 495, 23, 24, 25, 24, 25, 24, 25, 31, 132, 33, 1, 1, 1, 1, 1, 1, 1, 15, 34, 35, 35, 35, 35, 35, 94, 92, 92, 92, 92, 92, 92, 92, 93, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 33, 1, 2, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 6, 3, 4, 1, 1, 1, 15, 105, 20, 516, 92, 92, 95, 125, 126, 155, 1, 33, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 91, 17, 20, 18, 20, 18, 20, 18, 20, 18, 20, 18, 42, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 17, 39, 40, 39, 18, 20, 316, 316, 316, 17, 218, 219, 219, 219, 219, 223, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 494, 481, 495, 23, 31, 368, 369, 370, 371, 372, 373, 374, 375, 18, 23, 31, 494, 481, 495, 18, 453, 454, 455, 456, 17, 17, 39, 396, 398, 39, 17, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 119, 132, 6, 4, 1, 1, 1, 1, 1, 2, 5, 34, 92, 92, 92, 92, 92, 95, 17, 18, 17, 18, 17, 18, 18, 516, 92, 92, 92, 92, 92, 92, 92, 92, 92, 93, 35, 35, 299, 33, 1, 15, 2, 68, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 337, 7, 4, 33, 1, 1, 1, 15, 105, 17, 18, 17, 18, 18, 132, 133, 134, 134, 155, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 520, 417, 416, 417, 416, 417, 416, 417, 379, 18, 17, 18, 17, 211, 18, 17, 18, 17, 18, 17, 18, 17, 379, 18, 17, 18, 17, 211, 416, 417, 416, 417, 416, 417, 416, 521, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 94, 95, 20, 17, 40, 19, 40, 17, 40, 17, 40, 17, 40, 42, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 518, 519, 517, 39, 40, 20, 316, 316, 316, 39, 186, 187, 187, 187, 187, 188, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 494, 481, 495, 43, 52, 388, 389, 390, 391, 162, 392, 393, 394, 40, 43, 52, 494, 481, 495, 39, 463, 464, 465, 466, 296, 297, 396, 415, 522, 398, 39, 494, 481, 495, 23, 24, 25, 24, 25, 24, 25, 31, 132, 1, 6, 3, 3, 3, 3, 3, 5, 1, 105, 17, 18, 17, 18, 17, 18, 17, 18, 17, 125, 126, 127, 17, 18, 17, 18, 17, 18, 17, 125, 127, 39, 18, 516, 92, 92, 381, 33, 1, 15, 34, 35, 35, 35, 94, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 93, 35, 35, 35, 35, 299, 33, 1, 1, 1, 15, 105, 39, 40, 39, 40, 40, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 258, 40, 39, 40, 39, 42, 326, 79, 79, 79, 79, 79, 79, 80, 258, 40, 39, 40, 39, 42, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 94, 92, 95, 41, 17, 40, 17, 20, 18, 20, 18, 20, 18, 20, 18, 42, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 235, 233, 17, 18, 20, 17, 18, 20, 17, 191, 192, 192, 192, 192, 193, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 494, 481, 482, 479, 479, 479, 479, 479, 479, 481, 479, 479, 479, 483, 17, 403, 494, 481, 495, 17, 473, 474, 475, 476, 23, 31, 422, 438, 439, 424, 17, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 2, 7, 7, 7, 16, 326, 79, 80, 39, 40, 326, 79, 79, 79, 327, 1, 325, 79, 79, 79, 79, 79, 79, 79, 327, 325, 79, 79, 80, 20, 17, 132, 6, 3, 5, 34, 92, 92, 92, 95, 17, 39, 40, 39, 40, 39, 40, 39, 40, 39, 516, 92, 92, 92, 92, 381, 33, 1, 1, 1, 15, 105, 17, 18, 17, 18, 18, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 18, 17, 18, 17, 42, 18, 17, 18, 17, 18, 17, 18, 17, 258, 18, 17, 18, 17, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 92, 95, 17, 40, 17, 20, 18, 20, 19, 40, 17, 40, 17, 40, 17, 40, 42, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 235, 233, 218, 219, 219, 219, 219, 223, 39, 40, 39, 21, 39, 21, 39, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 494, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 495, 39, 414, 494, 481, 495, 18, 490, 491, 333, 492, 45, 44, 39, 422, 424, 17, 39, 494, 481, 495, 23, 24, 25, 24, 25, 24, 25, 31, 32, 7, 7, 7, 7, 7, 16, 39, 39, 39, 40, 39, 17, 18, 17, 18, 17, 18, 17, 18, 132, 1, 105, 17, 18, 17, 18, 17, 18, 17, 132, 105, 17, 18, 17, 18, 17, 32, 7, 7, 7, 16, 326, 79, 79, 80, 39, 39, 125, 126, 126, 126, 126, 126, 127, 326, 79, 79, 79, 80, 39, 132, 6, 3, 3, 3, 5, 325, 79, 79, 80, 20, 20, 132, 6, 3, 3, 3, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 40, 39, 40, 39, 42, 40, 39, 40, 39, 40, 39, 40, 39, 258, 40, 39, 40, 39, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 105, 20, 18, 20, 18, 20, 17, 40, 17, 20, 18, 20, 18, 20, 18, 20, 18, 42, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 235, 233, 186, 187, 187, 187, 187, 188, 17, 18, 21, 18, 21, 18, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 523, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 524, 17, 414, 494, 481, 482, 479, 479, 479, 481, 479, 479, 479, 479, 479, 479, 479, 479, 480, 481, 346, 45, 44, 45, 44, 45, 44, 45, 52, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 39, 40, 39, 40, 39, 40, 39, 40, 132, 1, 105, 39, 40, 39, 41, 39, 40, 39, 132, 105, 39, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 18, 132, 133, 134, 134, 134, 135, 105, 17, 18, 18, 20, 18, 20, 132, 1, 1, 1, 2, 7, 16, 20, 17, 18, 17, 17, 32, 7, 7, 7, 4, 6, 3, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 18, 17, 18, 17, 42, 18, 17, 18, 17, 18, 17, 18, 17, 258, 18, 17, 18, 17, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 105, 17, 40, 17, 40, 17, 20, 18, 20, 17, 40, 17, 40, 17, 40, 17, 41, 42, 64, 156, 67, 33, 1], [25, 31, 241, 242, 243, 241, 242, 243, 241, 191, 192, 192, 187, 187, 188, 39, 40, 39, 40, 39, 40, 39, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 437, 437, 437, 437, 437, 437, 437, 437, 437, 437, 437, 437, 437, 437, 437, 525, 494, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 481, 482, 479, 483, 18, 17, 18, 17, 18, 17, 39, 40, 39, 40, 39, 40, 39, 40, 39, 39, 40, 39, 17, 18, 17, 18, 17, 18, 17, 18, 132, 1, 105, 17, 18, 17, 18, 17, 18, 17, 132, 146, 127, 39, 40, 39, 40, 39, 40, 39, 39, 40, 39, 40, 39, 40, 39, 40, 132, 33, 1, 1, 1, 15, 105, 39, 40, 40, 20, 40, 20, 32, 7, 7, 7, 16, 39, 18, 17, 18, 40, 39, 20, 38, 38, 38, 38, 32, 7, 4, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 99, 100, 100, 101, 42, 39, 40, 39, 40, 39, 40, 39, 40, 258, 99, 100, 100, 101, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 105, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 136, 64, 156, 67, 33, 1], [117, 119, 253, 254, 255, 253, 254, 255, 253, 40, 39, 40, 186, 187, 188, 517, 518, 519, 517, 517, 518, 517, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 17, 21, 17, 21, 17, 21, 17, 296, 297, 339, 340, 341, 342, 343, 296, 297, 494, 481, 506, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 508, 481, 481, 481, 495, 40, 39, 40, 39, 40, 39, 17, 18, 17, 18, 17, 18, 17, 18, 17, 125, 126, 127, 39, 40, 39, 40, 39, 40, 39, 40, 132, 1, 105, 39, 40, 39, 40, 39, 40, 39, 132, 1, 105, 38, 38, 38, 38, 38, 38, 38, 17, 18, 17, 18, 17, 18, 17, 18, 132, 33, 1, 1, 1, 15, 105, 18, 20, 18, 20, 18, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 437, 437, 346, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 17, 18, 17, 18, 17, 18, 17, 18, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 17, 40, 64, 156, 67, 33, 1], [25, 31, 168, 39, 40, 168, 39, 40, 168, 18, 17, 18, 186, 187, 188, 233, 234, 235, 233, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 21, 17, 21, 40, 21, 17, 39, 23, 31, 300, 301, 302, 303, 304, 23, 31, 494, 481, 495, 17, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 17, 494, 481, 506, 507, 524, 18, 17, 18, 17, 18, 17, 39, 40, 125, 126, 126, 126, 126, 126, 126, 155, 1, 325, 79, 79, 79, 80, 17, 18, 326, 79, 327, 1, 325, 79, 79, 79, 79, 79, 79, 79, 327, 1, 105, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 125, 155, 33, 1, 1, 1, 15, 105, 40, 20, 40, 20, 40, 20, 39, 40, 39, 40, 18, 17, 18, 17, 18, 20, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 39, 40, 39, 40, 39, 40, 39, 40, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 133, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 135, 105, 20, 18, 64, 156, 67, 33, 1], [117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 186, 187, 188, 233, 234, 235, 233, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 40, 21, 39, 40, 39, 40, 39, 120, 119, 308, 309, 310, 311, 312, 120, 119, 494, 481, 495, 39, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 39, 494, 481, 495, 296, 297, 296, 297, 296, 297, 296, 297, 125, 126, 155, 1, 1, 1, 1, 1, 1, 1, 1, 105, 17, 18, 17, 18, 17, 18, 17, 18, 32, 7, 16, 18, 17, 18, 17, 18, 17, 18, 132, 1, 105, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 133, 155, 1, 1, 1, 15, 105, 20, 18, 18, 20, 18, 20, 17, 18, 17, 18, 40, 39, 40, 39, 40, 20, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 17, 18, 17, 18, 17, 18, 17, 18, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 17, 40, 64, 156, 67, 33, 1], [25, 31, 517, 518, 519, 517, 518, 517, 517, 518, 519, 517, 191, 192, 193, 233, 234, 235, 233, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 17, 18, 17, 18, 17, 18, 17, 23, 31, 317, 318, 319, 320, 321, 23, 31, 494, 481, 495, 17, 43, 44, 45, 44, 45, 44, 45, 44, 45, 52, 17, 494, 481, 495, 23, 31, 23, 31, 23, 31, 23, 31, 132, 1, 133, 134, 134, 134, 134, 134, 134, 134, 135, 105, 86, 86, 86, 86, 86, 86, 86, 86, 87, 18, 17, 18, 17, 18, 17, 18, 18, 125, 155, 1, 146, 126, 127, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 1, 15, 105, 21, 20, 21, 20, 40, 20, 18, 20, 18, 17, 18, 17, 18, 17, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 248, 326, 79, 79, 79, 79, 79, 79, 80, 526, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 3, 3, 527, 3, 527, 3, 527, 3, 527, 3, 3, 3, 4, 15, 105, 20, 18, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 233, 234, 235, 528, 529, 530, 531, 532, 234, 235, 233, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 39, 43, 52, 331, 332, 333, 334, 335, 43, 52, 494, 481, 495, 18, 533, 437, 437, 437, 437, 346, 437, 437, 437, 437, 534, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 118, 132, 133, 155, 1, 1, 1, 1, 1, 1, 1, 15, 146, 314, 315, 35, 35, 35, 35, 35, 35, 85, 86, 86, 86, 86, 86, 86, 86, 86, 344, 133, 134, 134, 135, 105, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 1, 15, 146, 126, 127, 20, 21, 20, 39, 20, 18, 40, 39, 40, 39, 40, 39, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 38, 38, 38, 38, 38, 38, 38, 38, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 535, 536, 537, 538, 537, 538, 537, 538, 537, 539, 540, 4, 33, 15, 105, 17, 40, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 233, 234, 235, 541, 542, 543, 544, 545, 234, 235, 233, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 17, 18, 17, 18, 17, 18, 17, 17, 478, 479, 479, 481, 479, 479, 479, 479, 480, 481, 495, 40, 546, 21, 21, 21, 21, 39, 21, 21, 21, 21, 414, 494, 481, 495, 23, 24, 25, 24, 25, 24, 25, 24, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 146, 134, 135, 146, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 314, 155, 33, 1, 1, 15, 146, 126, 126, 126, 127, 38, 38, 38, 38, 38, 38, 38, 38, 132, 33, 1, 1, 1, 1, 146, 134, 135, 105, 21, 20, 21, 20, 21, 20, 18, 17, 18, 17, 18, 17, 18, 38, 38, 38, 38, 38, 38, 125, 126, 126, 155, 33, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 38, 38, 38, 38, 38, 38, 38, 38, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 17, 547, 548, 549, 550, 549, 550, 549, 550, 549, 551, 552, 132, 33, 15, 105, 20, 18, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 233, 234, 235, 553, 554, 555, 556, 557, 234, 235, 233, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 39, 40, 484, 485, 485, 485, 486, 39, 494, 481, 481, 481, 481, 481, 481, 481, 481, 481, 495, 17, 546, 39, 40, 39, 40, 39, 40, 39, 40, 39, 414, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 118, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 155, 1, 1, 146, 134, 134, 134, 135, 146, 126, 126, 126, 126, 126, 126, 126, 126, 155, 33, 1, 1, 1, 1, 1, 1, 15, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 155, 133, 134, 134, 155, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 17, 18, 17, 18, 17, 18, 17, 18, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 20, 558, 559, 560, 561, 560, 561, 560, 561, 560, 562, 563, 132, 6, 5, 105, 17, 40, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 233, 234, 235, 233, 218, 219, 223, 233, 234, 235, 233, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 17, 18, 496, 497, 497, 497, 498, 39, 523, 507, 507, 507, 507, 507, 507, 507, 508, 481, 495, 20, 546, 21, 21, 21, 21, 39, 21, 21, 21, 21, 414, 494, 481, 495, 23, 24, 25, 24, 25, 24, 25, 24, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 146, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 155, 1, 1, 1, 1, 1, 1, 146, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 155, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 39, 40, 39, 40, 39, 40, 39, 40, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 17, 564, 565, 566, 567, 568, 568, 568, 569, 566, 570, 571, 132, 1, 1, 105, 86, 86, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 241, 242, 243, 241, 186, 187, 188, 241, 242, 243, 241, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 39, 40, 501, 502, 503, 504, 505, 21, 40, 21, 18, 40, 39, 40, 39, 17, 494, 481, 495, 17, 546, 39, 40, 39, 40, 39, 40, 39, 40, 39, 414, 494, 481, 495, 120, 118, 117, 118, 117, 118, 117, 118, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 248, 326, 79, 79, 79, 79, 79, 79, 80, 526, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 20, 572, 573, 574, 575, 576, 576, 576, 577, 574, 578, 552, 132, 1, 1, 34, 35, 35, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 253, 254, 255, 253, 186, 187, 188, 253, 254, 255, 253, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 17, 18, 509, 434, 510, 511, 512, 40, 21, 40, 21, 18, 17, 18, 515, 39, 494, 481, 495, 20, 579, 326, 79, 79, 80, 20, 326, 79, 79, 80, 525, 494, 481, 495, 23, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 38, 38, 38, 38, 38, 38, 38, 38, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 325, 79, 80, 580, 581, 582, 583, 584, 585, 586, 581, 587, 563, 132, 1, 2, 68, 35, 35, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 168, 38, 38, 168, 186, 187, 188, 168, 21, 40, 168, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 17, 478, 479, 481, 479, 479, 479, 479, 479, 479, 479, 479, 479, 479, 479, 479, 480, 481, 482, 479, 479, 479, 479, 479, 479, 479, 479, 479, 479, 479, 479, 480, 481, 495, 120, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 38, 38, 38, 38, 38, 38, 38, 38, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 17, 17, 40, 17, 588, 589, 590, 591, 592, 17, 336, 86, 344, 1, 34, 35, 35, 35, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 38, 38, 38, 38, 191, 192, 193, 20, 20, 17, 21, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 39, 523, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 481, 481, 481, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 507, 524, 23, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 17, 18, 17, 18, 17, 18, 17, 18, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 146, 127, 17, 40, 17, 40, 346, 17, 40, 336, 86, 345, 35, 299, 1, 34, 35, 35, 35, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 38, 38, 38, 38, 38, 17, 18, 17, 21, 39, 20, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 114, 115, 116, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 120, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 39, 40, 39, 40, 39, 40, 39, 40, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 105, 86, 86, 86, 86, 86, 86, 86, 345, 35, 35, 35, 337, 7, 68, 35, 35, 35, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 38, 38, 38, 316, 316, 39, 40, 39, 20, 20, 21, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 114, 115, 116, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 23, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 248, 326, 79, 79, 79, 79, 79, 79, 80, 526, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 64, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 38, 38, 38, 316, 316, 38, 38, 38, 38, 38, 38, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 40, 114, 115, 116, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 120, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 38, 38, 38, 38, 38, 38, 38, 38, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 64, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 316, 40, 39, 40, 316, 38, 38, 38, 38, 38, 38, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 40, 114, 115, 116, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 38, 38, 38, 38, 38, 38, 38, 38, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 238, 54, 147, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 316, 39, 41, 20, 316, 38, 38, 38, 38, 38, 38, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 40, 114, 115, 116, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 17, 18, 17, 18, 17, 18, 17, 18, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 238, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 156, 156, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 316, 18, 17, 39, 316, 18, 17, 316, 316, 18, 17, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 40, 114, 115, 116, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 39, 40, 39, 40, 39, 40, 39, 40, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 33, 1], [117, 119, 233, 234, 235, 233, 234, 233, 316, 40, 39, 40, 316, 40, 39, 316, 316, 40, 39, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 40, 114, 115, 116, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 248, 326, 79, 79, 79, 79, 79, 79, 80, 526, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 33, 1], [25, 31, 233, 234, 235, 233, 234, 233, 38, 38, 38, 316, 316, 18, 17, 20, 316, 18, 17, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 18, 114, 115, 116, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 40, 39, 40, 39, 40, 39, 40, 39, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 146, 593, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 594, 595, 155, 1], [117, 119, 233, 234, 235, 233, 234, 233, 38, 38, 38, 316, 316, 40, 39, 20, 316, 40, 39, 241, 596, 241, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 45, 44, 45, 44, 45, 44, 18, 114, 115, 116, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 39, 597, 598, 599, 598, 600, 40, 40, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [25, 31, 233, 234, 235, 233, 234, 233, 40, 39, 38, 38, 38, 18, 17, 316, 18, 17, 39, 253, 601, 253, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 533, 437, 437, 437, 437, 437, 437, 437, 437, 437, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 396, 602, 603, 603, 603, 604, 397, 398, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 133, 134, 134, 134, 134, 134, 134, 134, 135, 1, 1, 1, 1, 1, 1, 133, 134, 134, 134, 134, 135, 1, 1], [117, 119, 233, 234, 235, 233, 234, 233, 316, 20, 38, 38, 38, 40, 39, 316, 40, 17, 39, 168, 38, 168, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 546, 17, 18, 17, 18, 17, 18, 17, 18, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 405, 605, 606, 606, 606, 607, 406, 407, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 33, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 1, 1, 1, 33, 1, 1, 1, 1, 15, 1, 1], [25, 31, 233, 234, 235, 233, 234, 233, 316, 316, 18, 17, 18, 20, 21, 39, 21, 18, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 546, 39, 40, 39, 40, 39, 40, 39, 40, 39, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 405, 608, 609, 610, 611, 612, 406, 407, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 33, 1, 1, 1, 1, 1, 1, 1, 146, 134, 135, 1, 1, 1, 1, 6, 3, 3, 3, 3, 5, 1, 1], [117, 119, 233, 234, 235, 233, 234, 233, 316, 316, 40, 39, 40, 21, 18, 21, 39, 40, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 546, 17, 18, 17, 18, 17, 18, 17, 18, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 114, 115, 115, 116, 42, 405, 613, 614, 61, 615, 616, 406, 407, 258, 114, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 3, 3, 4, 1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 1, 2, 7, 7, 7, 7, 7, 4, 1], [25, 31, 233, 234, 235, 233, 234, 233, 316, 316, 18, 17, 18, 20, 40, 39, 20, 39, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 546, 125, 126, 126, 126, 126, 126, 126, 127, 17, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 122, 123, 123, 124, 136, 422, 423, 423, 423, 423, 423, 423, 424, 477, 122, 123, 123, 124, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 6, 3, 3, 3, 3, 3, 3, 5, 1, 1, 1, 1, 358, 91, 17, 18, 17, 18, 132, 1], [117, 119, 233, 234, 235, 233, 234, 233, 100, 100, 100, 100, 100, 100, 100, 100, 101, 18, 17, 18, 17, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 546, 132, 133, 134, 134, 134, 134, 135, 105, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 17, 18, 17, 18, 326, 79, 79, 79, 79, 79, 79, 79, 79, 80, 20, 20, 20, 20, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 7, 7, 7, 7, 7, 307, 7, 7, 7, 7, 7, 7, 7, 68, 91, 39, 40, 41, 40, 132, 1], [25, 31, 233, 234, 235, 233, 234, 233, 617, 618, 618, 618, 618, 618, 618, 619, 620, 518, 517, 518, 519, 517, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 546, 132, 33, 1, 1, 1, 1, 15, 105, 39, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 621, 622, 622, 623, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 17, 18, 17, 18, 132, 1], [117, 119, 233, 234, 235, 233, 234, 233, 624, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 18, 99, 100, 100, 100, 100, 367, 115, 116, 546, 132, 33, 1, 1, 1, 1, 15, 105, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 626, 627, 627, 628, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 346, 94, 95, 39, 40, 39, 40, 132, 1], [25, 31, 233, 234, 235, 233, 234, 233, 624, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 39, 40, 114, 115, 115, 115, 115, 115, 115, 116, 546, 132, 6, 3, 3, 3, 3, 5, 105, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 17, 18, 17, 40, 99, 100, 100, 101, 20, 18, 18, 629, 630, 631, 632, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 94, 95, 18, 17, 18, 17, 18, 132, 1], [117, 119, 241, 242, 243, 241, 596, 241, 624, 156, 156, 156, 156, 156, 156, 625, 241, 596, 241, 242, 243, 241, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 40, 18, 114, 115, 115, 259, 123, 123, 123, 124, 546, 32, 7, 7, 7, 307, 7, 7, 16, 39, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 39, 40, 39, 40, 39, 40, 39, 20, 114, 115, 115, 116, 20, 40, 40, 633, 634, 635, 636, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 68, 35, 35, 35, 35, 35, 35, 35, 35, 35, 351, 314, 314, 637, 127, 40, 39, 40, 39, 40, 132, 1], [25, 31, 638, 254, 255, 638, 601, 638, 624, 156, 156, 156, 156, 156, 156, 625, 638, 601, 638, 254, 255, 638, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 40, 39, 114, 115, 115, 116, 40, 39, 18, 17, 546, 17, 346, 396, 397, 397, 397, 397, 397, 398, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 17, 18, 17, 298, 639, 640, 640, 641, 22, 18, 17, 18, 17, 346, 22, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 299, 133, 134, 135, 325, 80, 20, 326, 79, 79, 327, 1], [117, 119, 642, 618, 618, 643, 618, 643, 644, 156, 156, 156, 156, 156, 156, 645, 643, 618, 643, 618, 618, 646, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 437, 437, 639, 640, 640, 641, 437, 437, 534, 39, 647, 39, 396, 415, 406, 406, 406, 406, 406, 407, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 39, 40, 39, 40, 39, 40, 39, 621, 622, 622, 622, 622, 623, 40, 39, 40, 39, 20, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 351, 314, 314, 314, 314, 314, 314, 155, 33, 1, 15, 105, 17, 18, 17, 18, 17, 132, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 621, 622, 622, 622, 622, 622, 622, 623, 436, 18, 17, 18, 405, 406, 406, 406, 406, 406, 406, 407, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 477, 57, 57, 57, 57, 57, 57, 57, 626, 627, 627, 627, 627, 628, 57, 57, 57, 57, 57, 136, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 35, 299, 133, 134, 134, 134, 134, 134, 134, 155, 1, 15, 105, 39, 40, 39, 40, 39, 132, 1], [117, 119, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 626, 627, 627, 627, 627, 627, 627, 628, 296, 297, 296, 297, 422, 438, 406, 406, 406, 406, 439, 424, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 650, 651, 651, 651, 651, 652, 296, 297, 296, 297, 296, 297, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 73, 74, 74, 74, 328, 33, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 17, 18, 17, 18, 17, 132, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 626, 627, 627, 627, 627, 627, 627, 628, 23, 31, 23, 31, 17, 422, 423, 423, 423, 423, 424, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 653, 654, 654, 654, 654, 655, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 35, 35, 94, 381, 6, 3, 3, 3, 3, 3, 3, 3, 3, 5, 325, 79, 79, 79, 80, 20, 132, 1], [117, 119, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 650, 651, 651, 651, 651, 651, 651, 652, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 656, 657, 658, 658, 659, 660, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 94, 92, 95, 32, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16, 39, 40, 39, 40, 20, 132, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 653, 654, 654, 654, 654, 654, 654, 655, 25, 24, 25, 31, 17, 18, 17, 18, 17, 18, 17, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 633, 661, 662, 662, 663, 636, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34, 95, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 17, 18, 17, 18, 40, 132, 1], [117, 119, 664, 665, 666, 667, 668, 669, 670, 671, 672, 667, 665, 666, 667, 665, 666, 667, 665, 666, 667, 673, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 674, 675, 676, 675, 676, 675, 676, 677, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 298, 678, 679, 679, 680, 22, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 105, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 39, 40, 39, 40, 18, 132, 1], [25, 31, 233, 234, 233, 234, 541, 681, 682, 683, 545, 234, 235, 233, 234, 235, 233, 234, 235, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 684, 685, 685, 685, 686, 18, 17, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 114, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 105, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 132, 1], [117, 119, 233, 234, 233, 234, 553, 687, 688, 689, 557, 234, 235, 233, 234, 235, 233, 234, 235, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 690, 691, 691, 692, 693, 396, 397, 398, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 477, 122, 123, 123, 124, 694, 695, 696, 695, 696, 697, 698, 699, 700, 699, 700, 699, 701, 702, 703, 704, 705, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 146, 126, 126, 126, 126, 126, 126, 126, 126, 127, 17, 18, 17, 18, 17, 18, 20, 20, 20, 17, 18, 132, 1], [25, 31, 233, 234, 233, 596, 241, 156, 156, 156, 241, 242, 243, 241, 242, 243, 241, 242, 243, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 706, 707, 708, 634, 709, 405, 406, 407, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 18, 17, 18, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 40, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 710, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 711, 712, 713, 713, 713, 713, 714, 715, 715, 715, 715, 716, 355, 356, 356, 356, 356, 356, 357, 717, 718, 718, 719, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 134, 134, 134, 134, 134, 134, 134, 134, 135, 105, 39, 40, 39, 40, 39, 40, 720, 721, 722, 39, 40, 132, 1], [117, 119, 233, 234, 233, 601, 253, 156, 156, 156, 638, 254, 255, 638, 254, 255, 638, 254, 255, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 296, 297, 396, 397, 397, 415, 406, 407, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 40, 39, 40, 39, 40, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 39, 40, 39, 40, 39, 40, 296, 297, 296, 297, 99, 100, 101, 296, 297, 296, 297, 296, 297, 20, 20, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 39, 40, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 723, 724, 724, 725, 726, 726, 727, 725, 726, 726, 727, 725, 726, 726, 727, 724, 724, 724, 724, 724, 724, 724, 728, 729, 730, 730, 730, 730, 731, 360, 361, 361, 361, 361, 361, 362, 732, 733, 734, 735, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 1, 1, 1, 1, 1, 15, 105, 17, 18, 17, 18, 736, 737, 738, 739, 740, 741, 742, 132, 1], [25, 31, 233, 234, 233, 617, 743, 156, 156, 156, 744, 618, 618, 643, 618, 618, 643, 618, 619, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 23, 31, 405, 406, 406, 406, 406, 407, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 745, 746, 746, 747, 748, 18, 17, 18, 17, 18, 17, 18, 17, 18, 745, 746, 746, 746, 746, 747, 748, 23, 31, 749, 750, 751, 752, 753, 754, 755, 23, 31, 23, 31, 17, 18, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 17, 18, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 723, 724, 728, 717, 718, 718, 719, 717, 718, 718, 719, 717, 718, 718, 719, 756, 756, 724, 724, 724, 724, 728, 757, 758, 759, 760, 372, 761, 762, 763, 370, 371, 372, 373, 374, 375, 764, 765, 766, 767, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 1, 1, 2, 3, 3, 5, 325, 79, 80, 20, 125, 768, 769, 770, 771, 772, 773, 774, 155, 1], [117, 119, 233, 234, 233, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 422, 423, 423, 423, 423, 424, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 775, 776, 776, 777, 778, 779, 780, 781, 782, 782, 782, 783, 780, 784, 775, 776, 776, 776, 776, 777, 778, 43, 44, 775, 776, 776, 776, 776, 777, 778, 45, 44, 45, 52, 39, 40, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 119, 39, 40, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 723, 728, 757, 732, 733, 734, 735, 732, 733, 734, 735, 732, 733, 734, 735, 757, 757, 756, 724, 724, 724, 785, 757, 786, 787, 788, 789, 790, 791, 792, 793, 794, 162, 795, 796, 797, 757, 757, 798, 799, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 1, 1, 15, 2, 7, 7, 16, 40, 39, 40, 132, 800, 801, 802, 803, 804, 805, 806, 1, 1], [25, 31, 233, 234, 233, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 437, 437, 39, 437, 437, 437, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 775, 776, 776, 776, 807, 808, 809, 810, 811, 811, 811, 812, 809, 813, 775, 776, 776, 776, 776, 776, 807, 814, 814, 775, 776, 776, 776, 776, 776, 807, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 815, 17, 18, 17, 18, 17, 18, 23, 31, 17, 18, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 723, 785, 757, 816, 817, 818, 819, 820, 821, 822, 819, 816, 817, 818, 819, 757, 757, 798, 724, 724, 724, 823, 757, 757, 757, 757, 757, 757, 824, 757, 757, 757, 757, 757, 757, 757, 824, 757, 825, 799, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 1, 1, 15, 105, 17, 18, 17, 18, 17, 18, 132, 826, 827, 828, 829, 830, 831, 832, 1, 1], [117, 119, 233, 234, 233, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 833, 834, 835, 836, 837, 808, 809, 838, 839, 839, 839, 840, 809, 813, 833, 841, 842, 835, 843, 844, 837, 845, 845, 833, 841, 842, 835, 843, 844, 837, 846, 847, 847, 848, 846, 847, 849, 850, 846, 847, 847, 851, 339, 340, 341, 342, 343, 39, 120, 119, 39, 40, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 723, 823, 757, 764, 765, 766, 767, 852, 853, 854, 767, 764, 765, 766, 767, 346, 855, 856, 857, 712, 724, 724, 823, 858, 856, 856, 856, 859, 860, 858, 859, 861, 861, 861, 858, 859, 860, 858, 857, 862, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 1, 1, 15, 105, 39, 40, 39, 40, 39, 40, 132, 863, 864, 865, 866, 867, 868, 869, 1, 1], [25, 31, 233, 234, 233, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 17, 18, 17, 18, 17, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 870, 871, 872, 873, 874, 875, 876, 877, 878, 878, 878, 879, 876, 880, 870, 881, 882, 872, 883, 884, 874, 885, 885, 870, 881, 882, 872, 883, 884, 874, 775, 776, 776, 807, 775, 776, 777, 778, 775, 776, 776, 807, 300, 301, 302, 303, 304, 17, 23, 31, 17, 18, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 723, 724, 823, 861, 861, 861, 861, 825, 724, 823, 861, 861, 861, 861, 861, 861, 825, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 886, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 1, 1, 15, 105, 17, 18, 17, 18, 17, 125, 155, 887, 888, 889, 889, 889, 890, 891, 1, 1], [117, 119, 233, 234, 233, 624, 156, 156, 892, 893, 893, 893, 893, 894, 156, 156, 156, 156, 625, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 870, 871, 872, 873, 874, 895, 896, 897, 898, 899, 896, 897, 898, 900, 870, 881, 882, 872, 883, 884, 874, 18, 17, 870, 881, 882, 872, 883, 884, 874, 833, 834, 836, 837, 833, 834, 836, 837, 833, 834, 836, 837, 308, 309, 310, 311, 312, 39, 120, 119, 296, 297, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 723, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 901, 902, 902, 903, 904, 905, 902, 902, 906, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 886, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 3, 3, 3, 3, 5, 105, 39, 40, 39, 40, 39, 132, 133, 907, 888, 889, 889, 889, 890, 908, 135, 1], [25, 31, 233, 234, 233, 624, 156, 156, 625, 115, 115, 115, 115, 624, 156, 156, 156, 156, 625, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 17, 18, 17, 18, 17, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 67, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 870, 871, 872, 873, 874, 909, 910, 911, 912, 913, 910, 911, 912, 914, 870, 881, 882, 872, 883, 884, 874, 17, 18, 870, 881, 915, 916, 917, 884, 874, 870, 871, 873, 874, 870, 871, 873, 874, 870, 871, 873, 874, 317, 318, 319, 320, 321, 17, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 723, 724, 724, 724, 725, 726, 726, 727, 724, 724, 724, 724, 725, 726, 726, 918, 919, 919, 920, 921, 922, 919, 919, 923, 724, 724, 724, 724, 724, 724, 724, 724, 725, 726, 726, 727, 724, 724, 724, 886, 23, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 20, 18, 17, 18, 18, 132, 33, 924, 888, 889, 889, 889, 890, 925, 15, 1], [117, 119, 241, 596, 241, 624, 156, 156, 625, 115, 115, 115, 115, 624, 156, 156, 156, 156, 625, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 926, 67, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 927, 928, 929, 930, 931, 909, 910, 911, 912, 913, 910, 911, 912, 914, 927, 932, 933, 929, 934, 935, 931, 20, 346, 927, 932, 936, 634, 937, 935, 931, 927, 928, 930, 931, 927, 928, 930, 931, 927, 928, 930, 931, 331, 332, 333, 334, 335, 20, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 117, 119, 723, 724, 724, 728, 717, 718, 718, 719, 938, 939, 939, 940, 717, 718, 718, 918, 919, 919, 920, 921, 922, 919, 919, 923, 941, 942, 943, 944, 938, 939, 939, 940, 717, 718, 718, 719, 756, 724, 724, 886, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 2, 945, 946, 946, 947, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 8, 9, 4, 1, 1, 1, 1, 1, 1, 1, 948, 949, 950, 951, 343, 40, 39, 40, 40, 132, 33, 952, 888, 889, 889, 889, 890, 953, 15, 1], [25, 31, 638, 601, 638, 624, 156, 156, 625, 115, 115, 115, 115, 624, 156, 156, 156, 156, 625, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 326, 79, 80, 20, 326, 80, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 67, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 18, 39, 18, 39, 18, 909, 910, 954, 912, 913, 910, 954, 912, 914, 18, 17, 18, 39, 40, 17, 18, 39, 40, 17, 18, 955, 845, 956, 18, 39, 40, 17, 21, 39, 40, 21, 18, 39, 21, 18, 18, 39, 40, 957, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 815, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 958, 38, 38, 38, 38, 38, 38, 38, 38, 22, 23, 24, 25, 24, 25, 24, 25, 31, 723, 724, 728, 757, 732, 733, 734, 735, 717, 718, 718, 719, 732, 733, 734, 918, 919, 919, 920, 921, 922, 919, 919, 923, 463, 464, 465, 466, 717, 718, 718, 719, 732, 733, 734, 735, 757, 756, 724, 886, 23, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 1, 1, 1, 1, 105, 626, 627, 627, 628, 21, 99, 100, 100, 100, 100, 100, 100, 101, 298, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 1, 1, 1, 1, 2, 300, 301, 302, 303, 304, 18, 17, 18, 18, 132, 33, 952, 888, 889, 889, 889, 890, 953, 15, 1], [117, 119, 642, 618, 643, 644, 156, 156, 645, 618, 618, 618, 618, 644, 156, 156, 156, 156, 625, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 17, 18, 17, 18, 17, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 256, 959, 43, 44, 45, 44, 45, 44, 45, 960, 685, 685, 685, 961, 45, 44, 45, 44, 45, 44, 45, 621, 622, 622, 622, 622, 623, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 40, 957, 814, 815, 39, 909, 910, 962, 912, 913, 910, 962, 912, 914, 40, 957, 814, 814, 814, 814, 814, 814, 814, 814, 814, 963, 845, 964, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 965, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 966, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 305, 38, 38, 38, 38, 38, 38, 38, 38, 42, 120, 118, 117, 118, 117, 118, 117, 119, 723, 724, 785, 757, 816, 817, 818, 819, 732, 733, 734, 735, 820, 821, 822, 967, 968, 968, 969, 970, 971, 968, 968, 972, 473, 474, 475, 476, 732, 733, 734, 735, 820, 821, 822, 819, 757, 798, 724, 886, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 105, 629, 630, 631, 632, 39, 114, 115, 115, 115, 115, 115, 115, 116, 258, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 105, 308, 309, 310, 311, 312, 40, 39, 40, 40, 132, 33, 973, 974, 975, 975, 975, 976, 977, 15, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 39, 40, 39, 40, 39, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 298, 57, 57, 57, 57, 57, 57, 57, 690, 692, 691, 691, 693, 57, 57, 57, 57, 57, 57, 978, 626, 627, 627, 627, 627, 628, 979, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 18, 980, 845, 966, 18, 981, 982, 983, 984, 913, 982, 983, 984, 985, 346, 980, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 986, 885, 885, 885, 885, 885, 885, 885, 987, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 305, 38, 38, 38, 38, 38, 38, 38, 38, 42, 23, 24, 25, 24, 25, 24, 25, 31, 723, 724, 823, 757, 764, 765, 766, 767, 764, 765, 766, 767, 852, 853, 854, 988, 989, 990, 990, 990, 990, 990, 991, 992, 993, 491, 333, 994, 764, 765, 766, 767, 852, 853, 854, 767, 757, 825, 724, 886, 23, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 2, 7, 7, 7, 16, 633, 634, 635, 636, 21, 114, 259, 123, 260, 115, 115, 115, 116, 258, 17, 18, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 17, 18, 17, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 1, 2, 7, 7, 16, 317, 318, 319, 320, 321, 18, 17, 18, 346, 132, 33, 995, 996, 997, 997, 997, 998, 999, 15, 1], [117, 119, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 17, 18, 17, 18, 17, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 99, 100, 100, 100, 100, 101, 706, 634, 1e3, 1001, 709, 99, 100, 100, 100, 100, 100, 1002, 626, 627, 627, 627, 627, 628, 1003, 100, 100, 100, 100, 101, 38, 38, 38, 38, 38, 38, 38, 38, 38, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 39, 980, 845, 966, 40, 1004, 1005, 845, 1006, 1007, 1005, 845, 1006, 1008, 17, 980, 845, 986, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 987, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 39, 40, 39, 40, 39, 40, 305, 38, 38, 38, 38, 38, 38, 21, 20, 42, 43, 44, 45, 44, 45, 44, 45, 52, 723, 724, 724, 823, 861, 861, 861, 861, 861, 861, 861, 861, 825, 724, 1009, 1010, 1011, 1012, 1012, 1012, 1012, 1012, 1013, 1014, 1015, 825, 724, 823, 861, 861, 861, 861, 825, 724, 823, 346, 825, 724, 724, 886, 43, 44, 45, 44, 45, 44, 45, 52, 132, 1, 1, 105, 20, 21, 20, 21, 20, 99, 100, 100, 346, 367, 116, 22, 1016, 377, 377, 377, 378, 258, 39, 40, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 39, 40, 39, 120, 118, 117, 118, 117, 119, 43, 44, 45, 44, 45, 52, 132, 1, 1, 1, 105, 18, 17, 18, 331, 332, 333, 334, 335, 40, 39, 40, 20, 132, 6, 1017, 1018, 1019, 1020, 1021, 1018, 1022, 5, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 39, 40, 39, 40, 39, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 114, 115, 115, 115, 115, 354, 100, 100, 100, 100, 100, 367, 115, 115, 115, 115, 115, 1023, 626, 627, 627, 627, 627, 628, 1024, 115, 115, 115, 115, 116, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 17, 980, 845, 1025, 814, 814, 963, 845, 964, 814, 963, 845, 964, 814, 814, 965, 845, 966, 17, 18, 684, 685, 685, 685, 685, 686, 17, 18, 17, 515, 17, 18, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 17, 18, 17, 18, 17, 18, 305, 38, 38, 38, 38, 38, 38, 17, 21, 42, 39, 40, 39, 20, 39, 40, 39, 40, 723, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 1026, 1010, 1011, 1012, 1012, 1012, 1012, 1012, 1013, 1014, 1026, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 886, 20, 20, 20, 20, 20, 20, 20, 20, 32, 7, 7, 16, 21, 20, 17, 20, 20, 114, 115, 115, 115, 115, 116, 42, 114, 115, 115, 115, 116, 258, 17, 18, 114, 115, 259, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 260, 115, 116, 17, 18, 17, 23, 24, 25, 24, 25, 31, 21, 17, 21, 20, 21, 20, 132, 1, 1, 1, 105, 40, 39, 40, 20, 81, 82, 83, 20, 18, 17, 18, 20, 32, 7, 1027, 1028, 1029, 1030, 1031, 1028, 1032, 4, 1], [117, 119, 664, 667, 665, 666, 666, 667, 665, 666, 667, 665, 668, 669, 670, 671, 672, 667, 1033, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 326, 79, 80, 20, 326, 80, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 259, 123, 123, 123, 1034, 650, 651, 651, 651, 651, 652, 1035, 123, 123, 260, 115, 116, 38, 38, 38, 38, 38, 38, 38, 38, 38, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 18, 980, 845, 845, 845, 986, 885, 885, 885, 885, 885, 885, 885, 1036, 845, 845, 845, 966, 39, 211, 690, 691, 691, 691, 691, 693, 379, 1037, 1038, 1038, 1038, 1038, 1038, 1039, 1037, 1038, 1039, 40, 39, 40, 745, 746, 747, 748, 745, 746, 746, 1040, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 39, 40, 39, 40, 39, 40, 305, 21, 20, 21, 20, 20, 621, 622, 622, 622, 622, 623, 57, 57, 57, 57, 57, 57, 1041, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 1026, 1010, 1011, 1012, 1012, 1012, 1012, 1012, 1013, 1014, 1026, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 1042, 57, 57, 57, 57, 57, 621, 622, 622, 622, 622, 623, 57, 57, 57, 18, 17, 18, 114, 115, 259, 123, 123, 124, 42, 114, 115, 115, 115, 116, 258, 39, 40, 114, 115, 116, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 114, 115, 116, 39, 40, 39, 120, 118, 117, 118, 117, 119, 20, 21, 20, 21, 17, 21, 132, 1, 1, 1, 105, 18, 17, 18, 20, 88, 89, 90, 18, 20, 20, 20, 39, 18, 17, 18, 81, 82, 82, 82, 83, 346, 132, 1], [25, 31, 233, 234, 235, 233, 233, 234, 235, 233, 234, 235, 541, 681, 682, 683, 545, 234, 235, 233, 234, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 39, 40, 39, 40, 39, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 39, 18, 17, 18, 621, 622, 622, 622, 622, 623, 17, 18, 17, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 101, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 40, 980, 845, 845, 845, 966, 39, 21, 1043, 1044, 1045, 21, 39, 980, 845, 845, 845, 966, 346, 42, 706, 1e3, 1001, 707, 708, 709, 258, 1046, 1047, 1047, 1048, 1049, 1049, 1050, 1051, 1048, 1052, 396, 397, 398, 775, 776, 777, 778, 775, 776, 776, 807, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 326, 80, 40, 39, 326, 79, 338, 20, 21, 20, 20, 1053, 626, 627, 627, 627, 627, 628, 1054, 20, 40, 39, 40, 346, 1055, 724, 724, 724, 724, 1056, 1057, 1057, 1058, 1059, 1056, 1057, 1057, 1058, 1059, 1010, 1011, 1012, 1012, 1012, 1012, 1012, 1013, 1014, 1056, 1057, 1057, 1058, 1059, 1056, 1057, 1057, 1058, 1059, 724, 724, 724, 724, 724, 799, 515, 20, 20, 20, 1053, 626, 627, 627, 627, 627, 628, 1054, 18, 17, 18, 17, 18, 114, 115, 116, 17, 18, 17, 42, 114, 115, 115, 115, 116, 258, 17, 18, 114, 115, 116, 39, 40, 20, 211, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 379, 40, 39, 40, 114, 115, 116, 17, 18, 17, 23, 24, 25, 24, 25, 31, 18, 17, 18, 17, 18, 17, 32, 7, 7, 7, 16, 40, 39, 40, 39, 40, 39, 40, 1060, 1061, 1062, 1061, 1063, 40, 39, 40, 88, 89, 89, 89, 90, 18, 132, 1], [117, 119, 233, 234, 235, 233, 233, 234, 235, 233, 234, 235, 553, 687, 688, 689, 557, 234, 235, 233, 234, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 17, 99, 100, 100, 101, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 626, 627, 627, 627, 627, 628, 39, 40, 39, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 18, 980, 845, 845, 845, 966, 17, 40, 1064, 1065, 1066, 40, 18, 980, 845, 845, 845, 966, 39, 42, 18, 17, 18, 17, 18, 17, 258, 1051, 1047, 1067, 1068, 1069, 1049, 1052, 1070, 1071, 1072, 405, 406, 407, 833, 834, 836, 837, 833, 834, 836, 837, 120, 118, 45, 44, 117, 118, 117, 118, 117, 118, 117, 119, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 99, 1002, 650, 651, 651, 651, 651, 652, 1003, 100, 100, 100, 100, 101, 1055, 724, 724, 728, 1073, 1074, 1075, 1075, 1076, 1077, 1074, 1075, 1075, 1076, 1077, 1010, 1011, 1012, 1012, 1012, 1012, 1012, 1013, 1014, 1074, 1075, 1075, 1076, 1077, 1074, 1075, 1075, 1076, 1077, 1073, 756, 724, 724, 724, 799, 99, 100, 100, 100, 1002, 650, 651, 651, 651, 651, 652, 1003, 100, 100, 100, 100, 100, 367, 115, 116, 39, 40, 39, 42, 1016, 377, 377, 377, 378, 258, 39, 40, 114, 115, 116, 17, 18, 211, 136, 21, 38, 38, 17, 38, 38, 17, 38, 38, 17, 20, 477, 379, 17, 18, 114, 115, 116, 39, 40, 39, 120, 118, 117, 118, 117, 119, 40, 39, 40, 99, 100, 100, 100, 100, 100, 101, 20, 18, 17, 18, 17, 18, 17, 18, 1078, 1079, 1079, 1079, 1080, 18, 17, 18, 18, 17, 18, 17, 18, 39, 132, 1], [25, 31, 241, 242, 243, 241, 241, 242, 243, 241, 242, 243, 241, 156, 156, 156, 241, 242, 243, 241, 596, 241, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 20, 114, 115, 115, 116, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 626, 627, 627, 627, 627, 628, 57, 57, 22, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 39, 980, 845, 845, 845, 966, 21, 18, 1081, 1082, 1083, 18, 21, 980, 845, 845, 845, 966, 18, 42, 18, 17, 18, 17, 18, 17, 258, 1070, 1071, 1084, 1085, 1086, 1071, 1072, 1087, 162, 1088, 405, 406, 407, 870, 871, 873, 874, 870, 871, 873, 874, 23, 31, 17, 18, 23, 24, 25, 24, 25, 24, 25, 31, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 114, 1023, 653, 654, 654, 654, 654, 655, 1024, 115, 115, 115, 115, 116, 1055, 724, 728, 757, 757, 1089, 1090, 1091, 1092, 1093, 1089, 1090, 1091, 1092, 1093, 1010, 1011, 1012, 1012, 1012, 1012, 1012, 1013, 1014, 1089, 1090, 1091, 1092, 1093, 1089, 1090, 1091, 1092, 1093, 757, 757, 756, 724, 724, 799, 114, 115, 115, 115, 1023, 653, 654, 654, 654, 654, 655, 1024, 115, 115, 115, 115, 115, 115, 115, 116, 17, 18, 17, 42, 114, 115, 115, 115, 116, 477, 17, 18, 114, 115, 116, 39, 40, 42, 21, 17, 17, 38, 38, 38, 38, 38, 41, 38, 38, 21, 18, 258, 39, 40, 114, 115, 116, 17, 18, 17, 23, 24, 25, 24, 25, 31, 18, 17, 18, 114, 115, 115, 115, 115, 115, 116, 20, 40, 39, 40, 39, 40, 39, 40, 1094, 1095, 1096, 1097, 1098, 18, 17, 20, 40, 39, 40, 39, 18, 17, 132, 1], [117, 119, 638, 254, 255, 638, 638, 254, 255, 638, 254, 255, 253, 156, 156, 156, 638, 254, 255, 638, 601, 638, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 437, 639, 640, 640, 641, 437, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 1053, 650, 651, 651, 651, 651, 652, 1054, 20, 56, 57, 57, 57, 346, 57, 57, 57, 57, 57, 57, 57, 20, 43, 44, 45, 44, 45, 44, 45, 44, 45, 52, 17, 980, 845, 845, 845, 966, 18, 40, 1099, 1100, 1101, 40, 18, 980, 845, 845, 845, 966, 18, 42, 96, 97, 97, 97, 97, 98, 258, 1087, 1102, 1103, 162, 1104, 1102, 1088, 19, 40, 19, 405, 406, 407, 927, 928, 930, 931, 927, 928, 930, 931, 43, 52, 39, 40, 120, 118, 117, 118, 117, 118, 117, 119, 17, 18, 621, 622, 622, 623, 17, 18, 17, 18, 122, 1034, 633, 635, 635, 635, 635, 636, 1035, 123, 123, 123, 123, 124, 1055, 724, 785, 757, 757, 816, 817, 1105, 818, 819, 816, 817, 1105, 818, 819, 1010, 1011, 1012, 1106, 1107, 1108, 1012, 1013, 1014, 816, 817, 1105, 818, 819, 816, 817, 1105, 818, 819, 757, 757, 798, 724, 724, 799, 122, 123, 123, 123, 1034, 633, 635, 635, 635, 635, 636, 1035, 123, 123, 123, 123, 123, 260, 115, 116, 39, 40, 39, 42, 114, 115, 115, 115, 116, 20, 39, 40, 114, 115, 116, 17, 18, 42, 17, 21, 38, 38, 41, 38, 17, 38, 38, 17, 38, 17, 21, 477, 17, 18, 114, 115, 116, 39, 40, 39, 120, 118, 117, 118, 117, 119, 40, 39, 40, 114, 115, 259, 123, 123, 123, 124, 20, 18, 17, 18, 17, 18, 17, 346, 1109, 1110, 1111, 1112, 1113, 40, 39, 346, 18, 17, 18, 17, 40, 39, 132, 1], [25, 31, 642, 618, 618, 643, 643, 618, 618, 643, 618, 618, 743, 156, 156, 156, 744, 618, 618, 643, 618, 646, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 621, 622, 622, 622, 622, 623, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 99, 100, 101, 39, 40, 39, 40, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1002, 653, 654, 654, 654, 654, 655, 1003, 100, 101, 19, 19, 19, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 20, 17, 18, 957, 814, 814, 965, 845, 845, 845, 966, 40, 21, 18, 17, 18, 21, 40, 980, 845, 845, 845, 966, 18, 42, 111, 112, 112, 112, 112, 113, 258, 17, 18, 1114, 39, 1115, 17, 18, 18, 17, 18, 422, 423, 424, 18, 17, 21, 17, 18, 21, 18, 17, 39, 40, 17, 18, 23, 24, 25, 24, 25, 24, 25, 31, 326, 79, 626, 627, 627, 628, 17, 20, 326, 79, 79, 79, 79, 79, 338, 211, 57, 57, 57, 57, 57, 57, 57, 57, 1116, 724, 785, 757, 757, 816, 817, 1105, 818, 819, 816, 817, 1105, 818, 819, 1117, 1011, 1012, 1118, 1119, 1120, 1012, 1013, 1121, 816, 817, 1105, 818, 819, 816, 817, 1105, 818, 819, 757, 757, 798, 724, 724, 1122, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 18, 17, 18, 17, 18, 114, 115, 116, 17, 18, 17, 42, 122, 123, 123, 123, 124, 20, 17, 18, 114, 115, 116, 39, 40, 42, 20, 20, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 20, 20, 39, 40, 114, 115, 116, 17, 18, 17, 23, 24, 25, 24, 25, 31, 18, 17, 18, 114, 115, 116, 57, 57, 57, 57, 57, 40, 18, 17, 20, 17, 20, 17, 18, 81, 82, 83, 18, 17, 18, 17, 18, 17, 453, 454, 455, 456, 132, 1], [117, 119, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 626, 627, 627, 627, 627, 628, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 114, 115, 116, 17, 18, 17, 18, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1023, 656, 1123, 1123, 1123, 1123, 660, 1024, 115, 116, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 20, 39, 40, 980, 845, 845, 845, 845, 845, 845, 1025, 814, 814, 814, 814, 814, 814, 814, 965, 845, 845, 845, 966, 40, 1124, 1125, 1126, 1126, 1126, 1126, 1127, 350, 57, 57, 346, 57, 57, 57, 57, 346, 57, 57, 39, 40, 39, 57, 515, 57, 57, 57, 57, 57, 57, 416, 417, 39, 40, 120, 118, 117, 118, 117, 118, 117, 119, 17, 20, 629, 630, 631, 632, 18, 17, 18, 17, 18, 17, 18, 17, 18, 42, 296, 297, 296, 297, 296, 297, 296, 297, 723, 724, 823, 757, 1128, 764, 765, 1129, 766, 767, 764, 765, 1129, 766, 767, 1130, 1131, 1132, 1133, 1134, 1135, 1132, 1136, 1137, 764, 765, 1129, 766, 767, 764, 765, 1129, 766, 767, 757, 757, 825, 724, 724, 886, 296, 297, 296, 297, 296, 297, 296, 297, 125, 126, 126, 126, 126, 126, 126, 127, 39, 114, 115, 116, 39, 40, 39, 56, 57, 57, 57, 57, 57, 57, 39, 40, 114, 115, 116, 17, 18, 42, 21, 38, 17, 38, 17, 38, 17, 38, 17, 38, 38, 38, 20, 298, 17, 18, 114, 115, 116, 39, 40, 39, 43, 44, 45, 44, 45, 52, 40, 39, 40, 114, 115, 116, 125, 126, 126, 126, 127, 18, 39, 1060, 1061, 1062, 1061, 1063, 1060, 1138, 1139, 1140, 1063, 39, 40, 39, 40, 39, 463, 464, 465, 466, 132, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 650, 651, 651, 651, 651, 652, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 114, 115, 116, 39, 40, 39, 40, 114, 115, 115, 115, 259, 123, 123, 123, 123, 123, 1034, 633, 635, 635, 635, 635, 636, 1035, 123, 124, 19, 19, 19, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 20, 17, 18, 1141, 885, 885, 885, 885, 885, 1036, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 1025, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 815, 23, 31, 17, 18, 23, 24, 25, 24, 25, 24, 25, 31, 20, 346, 633, 634, 635, 636, 40, 39, 40, 39, 40, 39, 40, 39, 40, 42, 23, 31, 23, 31, 23, 31, 23, 31, 723, 724, 724, 823, 861, 858, 856, 856, 856, 856, 856, 856, 856, 856, 859, 346, 757, 757, 757, 757, 757, 757, 757, 861, 858, 856, 856, 856, 856, 856, 856, 856, 856, 859, 861, 825, 724, 724, 724, 886, 23, 31, 23, 31, 23, 31, 23, 31, 132, 1, 1, 1, 1, 1, 1, 105, 17, 114, 115, 116, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 114, 115, 116, 39, 40, 136, 18, 38, 38, 38, 38, 38, 38, 38, 38, 17, 38, 18, 21, 258, 39, 40, 114, 115, 116, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 114, 115, 116, 132, 1, 1, 1, 105, 40, 17, 1078, 1079, 1079, 1079, 1080, 1078, 1079, 1079, 1079, 1080, 18, 18, 17, 18, 17, 473, 474, 475, 476, 132, 1], [117, 119, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 621, 622, 622, 622, 622, 622, 622, 623, 117, 118, 117, 118, 117, 119, 1142, 1143, 1144, 1144, 1145, 1146, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 114, 115, 116, 17, 18, 17, 18, 114, 115, 115, 115, 116, 211, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 1147, 1148, 1148, 1149, 1141, 885, 885, 885, 885, 885, 885, 885, 846, 847, 847, 848, 885, 885, 885, 885, 885, 1036, 845, 845, 845, 845, 845, 845, 846, 847, 847, 848, 846, 847, 849, 850, 846, 847, 849, 850, 846, 847, 847, 848, 846, 847, 849, 1150, 120, 119, 39, 40, 120, 118, 117, 118, 117, 118, 117, 119, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 17, 41, 17, 18, 42, 120, 118, 117, 118, 117, 118, 117, 119, 723, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 823, 757, 757, 757, 757, 757, 825, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 886, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 105, 39, 114, 115, 116, 17, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 114, 115, 116, 17, 18, 20, 17, 20, 38, 17, 38, 17, 38, 38, 41, 38, 17, 38, 18, 258, 17, 18, 114, 115, 116, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 114, 115, 116, 132, 1, 1, 1, 105, 18, 17, 1094, 1095, 1096, 1097, 1098, 1094, 1095, 1096, 1097, 1098, 40, 39, 20, 20, 20, 490, 491, 333, 492, 132, 1], [25, 31, 648, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 649, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 626, 627, 627, 627, 627, 627, 627, 628, 25, 24, 25, 24, 25, 31, 633, 661, 662, 662, 663, 636, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 114, 115, 116, 39, 40, 39, 40, 114, 115, 115, 115, 116, 42, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 775, 776, 776, 807, 347, 348, 348, 348, 348, 348, 348, 349, 775, 776, 776, 807, 745, 746, 746, 1040, 17, 980, 845, 845, 845, 845, 986, 885, 775, 776, 776, 807, 775, 776, 777, 778, 775, 776, 777, 778, 775, 776, 776, 807, 775, 776, 777, 778, 23, 31, 17, 18, 23, 24, 25, 24, 25, 24, 25, 31, 39, 40, 39, 40, 39, 40, 39, 39, 40, 39, 40, 39, 40, 39, 40, 136, 23, 24, 25, 24, 25, 24, 25, 31, 723, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 823, 861, 861, 861, 825, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 886, 23, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 1, 1, 1, 1, 105, 17, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 116, 39, 40, 22, 20, 38, 17, 38, 38, 38, 17, 38, 38, 38, 38, 38, 40, 258, 39, 40, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 116, 132, 1, 1, 1, 105, 40, 39, 1109, 1110, 1111, 1112, 1113, 1109, 1110, 1111, 1112, 1113, 18, 17, 18, 81, 82, 82, 82, 82, 83, 132, 1], [117, 119, 664, 667, 665, 666, 667, 665, 666, 667, 665, 666, 156, 156, 156, 666, 667, 665, 666, 667, 665, 673, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 626, 627, 627, 627, 627, 627, 627, 628, 117, 118, 117, 118, 117, 119, 437, 678, 679, 679, 680, 437, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 114, 115, 354, 346, 100, 100, 100, 367, 115, 115, 115, 116, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 833, 834, 836, 837, 355, 356, 356, 356, 356, 356, 356, 357, 833, 834, 836, 837, 775, 776, 776, 807, 39, 980, 845, 845, 845, 845, 966, 39, 833, 834, 836, 837, 833, 834, 836, 837, 833, 834, 836, 837, 833, 834, 836, 837, 833, 834, 836, 837, 120, 119, 39, 40, 120, 118, 117, 118, 117, 118, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 120, 118, 117, 118, 117, 118, 117, 119, 723, 724, 724, 724, 725, 726, 726, 727, 1151, 1152, 1153, 1154, 1155, 724, 724, 724, 724, 725, 726, 726, 727, 725, 726, 726, 727, 724, 724, 725, 726, 726, 726, 727, 725, 726, 726, 727, 724, 724, 724, 886, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 105, 20, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 17, 18, 42, 21, 20, 21, 20, 38, 17, 38, 38, 21, 20, 38, 20, 21, 258, 17, 18, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 132, 1, 1, 1, 105, 18, 81, 82, 82, 82, 82, 82, 82, 82, 82, 82, 83, 40, 39, 40, 88, 89, 89, 89, 89, 90, 132, 1], [25, 31, 233, 234, 235, 233, 234, 235, 233, 234, 235, 528, 1156, 1157, 1158, 532, 234, 235, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 650, 651, 651, 651, 651, 651, 651, 652, 25, 24, 25, 24, 25, 31, 18, 114, 115, 115, 116, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 870, 871, 873, 874, 360, 361, 361, 361, 361, 361, 361, 362, 870, 871, 873, 874, 833, 834, 836, 837, 17, 980, 845, 845, 845, 845, 966, 17, 870, 871, 873, 874, 1159, 1160, 1161, 874, 1159, 1160, 1161, 874, 870, 871, 873, 874, 1159, 1160, 1161, 874, 23, 31, 17, 18, 23, 24, 25, 24, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 25, 31, 723, 724, 724, 728, 717, 718, 718, 719, 300, 301, 302, 303, 304, 938, 939, 939, 940, 717, 718, 718, 719, 717, 718, 718, 719, 1073, 1073, 717, 718, 718, 718, 719, 717, 718, 718, 719, 756, 724, 724, 886, 23, 24, 25, 24, 25, 24, 25, 31, 132, 1, 1, 1, 1, 1, 1, 105, 20, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 39, 40, 136, 17, 21, 17, 21, 18, 38, 20, 21, 18, 21, 20, 21, 17, 477, 39, 40, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 132, 1, 1, 1, 105, 40, 88, 89, 89, 89, 89, 89, 89, 89, 89, 89, 90, 18, 17, 18, 17, 18, 17, 18, 17, 18, 132, 1], [117, 119, 233, 234, 235, 233, 234, 235, 233, 234, 235, 541, 542, 543, 544, 545, 234, 235, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 653, 654, 654, 654, 654, 654, 654, 655, 117, 118, 117, 118, 117, 119, 40, 122, 123, 123, 124, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 114, 115, 259, 123, 123, 123, 123, 260, 115, 259, 123, 124, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 927, 928, 930, 931, 369, 370, 371, 372, 373, 374, 374, 375, 927, 928, 930, 931, 1162, 1163, 1164, 1165, 18, 980, 845, 845, 845, 845, 966, 18, 927, 928, 930, 931, 1166, 634, 1167, 931, 1166, 634, 1167, 931, 927, 928, 930, 931, 1166, 634, 1167, 931, 43, 52, 39, 40, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 723, 724, 728, 757, 732, 733, 734, 735, 308, 309, 310, 311, 312, 717, 718, 718, 719, 732, 733, 734, 735, 732, 733, 734, 735, 856, 856, 732, 733, 1168, 734, 735, 732, 733, 734, 735, 757, 756, 724, 886, 120, 118, 117, 118, 117, 118, 117, 119, 132, 1, 1, 1, 1, 1, 1, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 155, 1, 1, 1, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 17, 20, 125, 126, 126, 126, 126, 126, 126, 126, 126, 155, 1], [25, 31, 233, 234, 235, 233, 234, 235, 233, 234, 235, 553, 554, 555, 556, 557, 234, 235, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 656, 1123, 657, 658, 658, 659, 1123, 660, 25, 24, 25, 24, 25, 31, 20, 39, 40, 20, 39, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1169, 1170, 1171, 17, 18, 17, 18, 1169, 1170, 1171, 18, 17, 42, 23, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 21, 17, 21, 40, 389, 390, 391, 162, 392, 393, 393, 394, 368, 21, 17, 21, 775, 776, 777, 778, 40, 980, 845, 845, 845, 845, 966, 40, 17, 21, 39, 21, 955, 845, 956, 40, 955, 845, 956, 40, 21, 18, 21, 40, 955, 845, 956, 40, 17, 18, 17, 18, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 723, 724, 785, 757, 816, 817, 818, 819, 317, 318, 319, 320, 321, 732, 733, 734, 735, 816, 817, 818, 819, 816, 817, 818, 819, 757, 1172, 816, 1173, 1174, 822, 819, 816, 817, 818, 819, 757, 798, 724, 886, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 17, 18, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [117, 119, 241, 242, 243, 241, 242, 243, 241, 242, 243, 241, 218, 219, 223, 241, 242, 243, 241, 242, 243, 241, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 633, 635, 661, 662, 662, 663, 635, 636, 45, 44, 45, 44, 117, 119, 326, 79, 80, 20, 326, 80, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 1180, 1181, 43, 44, 45, 44, 45, 44, 45, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 17, 21, 17, 21, 18, 17, 17, 18, 17, 17, 18, 21, 388, 17, 21, 17, 833, 834, 836, 837, 18, 980, 845, 845, 845, 845, 1025, 814, 814, 814, 814, 814, 963, 845, 964, 814, 963, 845, 964, 814, 814, 814, 814, 814, 963, 845, 964, 815, 39, 40, 39, 18, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 723, 724, 823, 757, 764, 765, 766, 767, 1182, 332, 333, 334, 1183, 764, 765, 766, 767, 764, 765, 766, 767, 764, 765, 766, 767, 757, 1184, 764, 1185, 853, 854, 767, 764, 765, 766, 767, 757, 825, 724, 886, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 39, 40, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [25, 31, 638, 254, 255, 638, 254, 255, 638, 254, 255, 253, 186, 187, 188, 253, 254, 255, 638, 254, 255, 638, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 437, 437, 678, 679, 679, 680, 437, 437, 437, 437, 437, 437, 23, 31, 17, 396, 397, 397, 398, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 39, 1187, 17, 53, 54, 54, 54, 54, 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 21, 40, 17, 40, 18, 17, 39, 40, 39, 40, 39, 40, 20, 21, 17, 21, 870, 871, 873, 874, 17, 1141, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 987, 17, 18, 17, 21, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 723, 724, 724, 823, 861, 861, 861, 861, 861, 825, 724, 823, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 825, 724, 823, 861, 861, 861, 861, 861, 825, 724, 724, 886, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 17, 18, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [117, 119, 1188, 218, 219, 1189, 219, 219, 1189, 219, 219, 168, 186, 187, 188, 168, 219, 219, 1189, 219, 223, 1188, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 21, 114, 115, 115, 116, 17, 18, 17, 18, 17, 18, 120, 119, 39, 405, 406, 406, 407, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 17, 1192, 39, 64, 156, 65, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 326, 79, 79, 79, 79, 80, 18, 17, 326, 79, 79, 79, 79, 79, 79, 80, 870, 871, 873, 874, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 18, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 17, 39, 40, 39, 17, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 723, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 724, 886, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 105, 39, 40, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [25, 31, 20, 186, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 187, 188, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 21, 40, 114, 115, 115, 116, 39, 40, 39, 40, 39, 40, 23, 31, 17, 422, 438, 406, 407, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 17, 42, 17, 64, 65, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 17, 21, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 927, 928, 930, 931, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 20, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 39, 40, 40, 17, 21, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 723, 724, 724, 724, 724, 725, 726, 726, 727, 725, 726, 726, 727, 725, 726, 726, 727, 724, 724, 724, 724, 724, 724, 724, 724, 725, 726, 726, 727, 725, 726, 726, 727, 725, 726, 726, 727, 724, 724, 886, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 16, 17, 18, 32, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [117, 119, 20, 191, 192, 192, 192, 192, 192, 187, 187, 187, 192, 192, 192, 192, 192, 192, 192, 192, 193, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 326, 79, 376, 377, 377, 1193, 79, 79, 80, 18, 17, 18, 120, 119, 39, 20, 405, 406, 407, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 42, 39, 64, 237, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 21, 17, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 20, 43, 44, 45, 44, 45, 44, 45, 44, 45, 52, 17, 40, 21, 296, 297, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 723, 724, 724, 724, 724, 717, 718, 718, 719, 717, 718, 718, 719, 717, 718, 718, 719, 724, 724, 724, 724, 724, 724, 724, 724, 717, 718, 718, 719, 717, 718, 718, 719, 717, 718, 718, 719, 724, 724, 886, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 134, 134, 135, 1, 1, 15, 238, 54, 54, 54, 1194, 1195, 54, 54, 54, 54, 1196, 1197, 54, 54, 54, 54, 54], [25, 31, 39, 40, 39, 517, 518, 519, 517, 186, 187, 188, 517, 518, 519, 517, 518, 519, 517, 518, 519, 517, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 39, 23, 31, 17, 18, 422, 423, 424, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 1180, 1181, 17, 64, 156, 237, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 17, 21, 18, 21, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 19, 19, 17, 18, 17, 18, 17, 18, 17, 39, 21, 17, 23, 31, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 1198, 857, 857, 857, 857, 732, 733, 734, 735, 732, 733, 734, 735, 732, 733, 734, 735, 724, 724, 724, 724, 724, 724, 724, 724, 732, 733, 734, 735, 732, 733, 734, 735, 732, 733, 734, 735, 857, 857, 1199, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 15, 1, 1, 15, 64, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 1202, 1203, 156, 156, 65, 72, 72], [117, 119, 17, 18, 17, 233, 234, 235, 233, 186, 187, 188, 233, 234, 235, 233, 234, 235, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 21, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 40, 120, 119, 326, 80, 20, 326, 79, 80, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 396, 397, 397, 398, 1177, 1178, 1179, 40, 39, 1187, 39, 64, 156, 156, 156, 156, 156, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 1204, 1205, 1206, 1205, 1206, 1207, 1208, 1209, 1210, 1207, 1208, 1209, 1210, 1207, 1208, 1209, 1210, 1205, 1211, 1211, 1211, 1211, 1211, 1211, 1206, 1207, 1208, 1209, 1210, 1207, 1208, 1209, 1210, 1207, 1208, 1209, 1210, 1205, 1206, 1212, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 146, 134, 135, 15, 64, 156, 156, 156, 1200, 1201, 156, 156, 156, 1213, 1214, 156, 156, 156, 72, 72, 72], [25, 31, 39, 41, 39, 233, 234, 235, 233, 186, 187, 188, 233, 234, 235, 233, 234, 235, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 18, 23, 31, 17, 18, 20, 17, 20, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 405, 406, 406, 407, 1177, 1178, 1179, 18, 17, 1192, 17, 128, 128, 128, 128, 128, 329, 330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 298, 99, 100, 100, 101, 22, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 15, 64, 156, 156, 156, 1200, 1201, 156, 156, 156, 1202, 1203, 156, 156, 156, 237, 72, 72], [117, 119, 39, 40, 39, 241, 242, 243, 241, 186, 187, 188, 241, 242, 243, 241, 242, 243, 241, 242, 243, 241, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 21, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 40, 120, 119, 39, 40, 396, 397, 398, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 405, 406, 406, 407, 1177, 1178, 1179, 40, 39, 56, 57, 57, 57, 57, 57, 57, 22, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 639, 640, 640, 641, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 15, 64, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 1213, 1214, 1215, 1216, 156, 237, 72], [25, 31, 17, 18, 17, 638, 254, 255, 253, 186, 187, 188, 253, 254, 255, 638, 254, 255, 638, 254, 255, 638, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 39, 23, 31, 17, 18, 405, 406, 407, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 405, 406, 406, 407, 1177, 1178, 1179, 18, 17, 18, 17, 18, 17, 18, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 621, 622, 622, 622, 622, 623, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 15, 1217, 1201, 1218, 1218, 1218, 1218, 1200, 1219, 1201, 156, 1202, 1203, 1220, 1221, 1215, 1216, 72], [117, 119, 296, 297, 39, 1188, 39, 40, 168, 186, 187, 188, 168, 39, 40, 1188, 39, 40, 1188, 39, 40, 1188, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 21, 114, 115, 116, 17, 18, 17, 18, 17, 18, 17, 18, 43, 52, 39, 40, 405, 406, 407, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 405, 406, 406, 407, 1177, 1178, 1179, 40, 39, 38, 38, 38, 38, 38, 38, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 626, 627, 627, 627, 627, 628, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 15, 1217, 1201, 1222, 1222, 1222, 1222, 1200, 1219, 1201, 156, 156, 156, 156, 156, 1220, 1221, 72], [25, 31, 23, 31, 21, 18, 17, 18, 18, 191, 192, 193, 17, 18, 17, 21, 17, 18, 21, 18, 17, 21, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 114, 115, 116, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 20, 396, 415, 406, 407, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 405, 406, 406, 407, 1177, 1178, 1179, 18, 17, 38, 38, 38, 38, 38, 38, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 650, 651, 651, 651, 651, 652, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 5, 15, 1217, 1201, 1223, 1224, 1224, 1225, 1200, 1219, 1201, 156, 156, 156, 156, 156, 1213, 1214, 72], [117, 118, 117, 119, 39, 21, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 114, 115, 116, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 39, 405, 406, 406, 407, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 405, 406, 406, 407, 1177, 1178, 1179, 40, 39, 38, 38, 38, 38, 38, 38, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 653, 654, 654, 654, 654, 655, 45, 44, 45, 44, 45, 44, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1217, 1201, 156, 156, 156, 156, 1200, 1219, 1201, 1226, 346, 1227, 1228, 156, 1202, 1203, 72], [25, 24, 25, 31, 21, 18, 17, 18, 17, 18, 17, 39, 40, 18, 17, 18, 17, 21, 17, 18, 21, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 114, 115, 116, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 21, 422, 423, 423, 424, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 422, 423, 423, 424, 1177, 1178, 1179, 18, 17, 38, 38, 38, 38, 38, 38, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 57, 57, 57, 57, 57, 57, 57, 379, 656, 657, 658, 658, 659, 660, 211, 57, 57, 57, 57, 57, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1217, 1201, 156, 156, 156, 156, 1200, 1219, 1201, 1229, 1230, 1230, 1231, 156, 1215, 1216, 72], [117, 118, 229, 230, 519, 1232, 529, 530, 531, 1233, 518, 519, 517, 518, 519, 517, 518, 519, 517, 518, 519, 517, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 114, 115, 116, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 20, 21, 40, 39, 20, 21, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 38, 38, 38, 38, 38, 38, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 18, 17, 41, 17, 18, 17, 258, 633, 661, 662, 662, 663, 636, 42, 18, 17, 18, 17, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1217, 1201, 156, 156, 156, 156, 1234, 1235, 1236, 1223, 1224, 1224, 1225, 156, 1220, 1221, 72], [25, 31, 233, 234, 235, 541, 542, 543, 544, 545, 234, 235, 233, 234, 235, 233, 234, 235, 233, 234, 235, 233, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 114, 115, 116, 43, 44, 45, 44, 45, 44, 45, 44, 117, 119, 21, 17, 18, 17, 21, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 17, 38, 38, 38, 38, 38, 38, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 39, 40, 39, 40, 39, 40, 39, 477, 39, 678, 679, 679, 680, 40, 136, 40, 39, 40, 39, 40, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1217, 1201, 156, 156, 156, 621, 622, 622, 622, 623, 156, 156, 156, 156, 1213, 1214, 72], [117, 119, 233, 234, 235, 553, 554, 555, 556, 557, 234, 235, 233, 234, 235, 233, 234, 235, 233, 234, 235, 233, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 101, 23, 31, 20, 396, 397, 397, 398, 21, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 38, 38, 38, 38, 38, 38, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 326, 79, 80, 20, 326, 79, 79, 80, 17, 114, 115, 115, 116, 17, 326, 79, 80, 20, 326, 80, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1217, 1201, 156, 1213, 1214, 626, 627, 627, 627, 628, 1213, 1214, 156, 156, 1202, 1203, 72], [25, 31, 241, 242, 243, 241, 218, 219, 223, 241, 242, 243, 241, 242, 243, 241, 242, 243, 241, 242, 243, 241, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 39, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 43, 52, 20, 405, 406, 439, 424, 20, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 17, 38, 38, 38, 38, 38, 38, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 17, 18, 17, 18, 17, 18, 20, 122, 123, 123, 124, 20, 17, 18, 17, 18, 17, 18, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1237, 1225, 156, 1202, 1203, 650, 651, 651, 651, 652, 1202, 1203, 156, 1213, 1214, 156, 72], [117, 119, 253, 254, 255, 253, 186, 187, 188, 253, 254, 255, 638, 254, 255, 638, 254, 255, 638, 254, 255, 253, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 122, 123, 123, 123, 123, 123, 123, 123, 260, 115, 116, 17, 18, 20, 422, 423, 424, 20, 20, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 38, 38, 38, 38, 38, 38, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 17, 18, 17, 18, 17, 18, 39, 40, 39, 40, 39, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1238, 1214, 1215, 1216, 156, 653, 654, 654, 654, 655, 156, 1215, 1216, 1202, 1203, 156, 72], [25, 31, 168, 21, 18, 168, 186, 187, 188, 168, 39, 40, 1188, 39, 40, 1188, 39, 40, 1188, 39, 40, 168, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 326, 79, 79, 79, 79, 79, 80, 20, 20, 1016, 377, 378, 296, 297, 326, 80, 20, 326, 79, 80, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 17, 38, 38, 38, 38, 38, 38, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 40, 39, 621, 622, 622, 623, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 1239, 1203, 1220, 1221, 156, 656, 657, 658, 659, 660, 156, 1220, 1221, 1215, 1216, 156, 72], [117, 119, 296, 297, 17, 21, 191, 192, 193, 18, 218, 219, 219, 219, 219, 219, 219, 219, 219, 223, 296, 297, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 296, 297, 99, 100, 100, 100, 100, 100, 100, 367, 115, 116, 23, 31, 17, 18, 17, 18, 17, 18, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 38, 38, 38, 38, 38, 38, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 326, 79, 79, 79, 79, 79, 80, 20, 326, 79, 79, 79, 79, 79, 79, 80, 626, 627, 627, 628, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 15, 1, 15, 64, 156, 156, 156, 156, 633, 661, 662, 663, 636, 156, 156, 156, 1220, 1221, 156, 72], [25, 31, 23, 31, 21, 18, 40, 39, 40, 40, 186, 187, 187, 187, 187, 187, 187, 187, 187, 188, 23, 31, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 114, 115, 259, 123, 123, 123, 123, 260, 115, 116, 120, 119, 17, 396, 397, 398, 39, 17, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 17, 18, 17, 18, 17, 18, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 629, 630, 631, 632, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 146, 135, 146, 146, 1240, 156, 156, 156, 1223, 1241, 1242, 1243, 1225, 156, 156, 156, 156, 1213, 1214, 72], [117, 118, 117, 119, 296, 297, 18, 17, 18, 18, 191, 192, 192, 192, 192, 192, 192, 192, 192, 193, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 114, 115, 116, 346, 18, 17, 18, 114, 115, 116, 23, 31, 396, 415, 406, 407, 21, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 396, 397, 397, 398, 39, 40, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 633, 634, 635, 636, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 1, 1, 15, 330, 156, 156, 156, 1200, 1219, 1201, 156, 156, 156, 156, 156, 1202, 1203, 72], [25, 24, 25, 31, 23, 31, 517, 518, 519, 517, 518, 519, 1232, 529, 530, 531, 1233, 518, 519, 517, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 114, 115, 116, 20, 40, 39, 40, 114, 115, 116, 120, 119, 405, 406, 406, 407, 20, 21, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 405, 406, 406, 522, 397, 397, 398, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 122, 123, 123, 123, 260, 115, 259, 123, 123, 123, 123, 123, 123, 260, 115, 354, 100, 100, 100, 101, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 1, 1, 15, 64, 156, 156, 156, 1200, 1219, 1201, 156, 156, 156, 156, 156, 1215, 1216, 237], [117, 118, 117, 118, 117, 119, 233, 234, 235, 233, 234, 235, 541, 542, 543, 544, 545, 234, 235, 233, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 114, 115, 354, 100, 100, 100, 100, 367, 115, 116, 23, 31, 405, 406, 439, 424, 21, 17, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 405, 406, 406, 406, 406, 406, 407, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 114, 115, 116, 38, 38, 38, 38, 38, 38, 122, 123, 123, 123, 123, 123, 346, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 1, 1, 15, 64, 156, 156, 156, 1200, 1219, 1201, 156, 156, 156, 156, 156, 1220, 1221, 156], [25, 24, 25, 24, 25, 31, 233, 234, 235, 233, 234, 235, 553, 554, 555, 556, 557, 234, 235, 233, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 122, 123, 123, 123, 123, 260, 115, 259, 123, 124, 120, 119, 422, 423, 424, 21, 39, 21, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 422, 423, 423, 438, 406, 406, 407, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 1, 1, 15, 1244, 1218, 1218, 1218, 1226, 1227, 1228, 1218, 1218, 1200, 1201, 156, 156, 1213, 1214], [117, 118, 117, 118, 117, 119, 241, 242, 243, 241, 242, 243, 241, 218, 219, 223, 241, 242, 243, 241, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 119, 296, 297, 17, 17, 18, 114, 115, 116, 40, 40, 23, 31, 296, 297, 296, 297, 296, 297, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 40, 39, 422, 423, 423, 424, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 1, 1, 15, 1245, 1222, 1222, 1222, 1229, 1230, 1231, 1222, 1222, 1200, 1201, 156, 156, 1202, 1203], [25, 24, 25, 24, 25, 31, 253, 254, 255, 638, 254, 255, 253, 186, 187, 188, 253, 254, 255, 253, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 31, 23, 31, 379, 39, 40, 114, 115, 116, 296, 297, 120, 118, 23, 31, 23, 31, 23, 31, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 18, 17, 18, 17, 18, 17, 18, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 114, 115, 116, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 146, 135, 2, 5, 1237, 1224, 1224, 1225, 1223, 1224, 1225, 1223, 1224, 1200, 1201, 156, 1213, 1214, 156], [117, 118, 117, 118, 117, 119, 168, 40, 39, 1188, 40, 39, 168, 186, 187, 188, 168, 18, 21, 168, 120, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 17, 18, 122, 123, 124, 23, 31, 23, 24, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 40, 39, 40, 39, 40, 39, 40, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 15, 238, 147, 156, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 156, 1202, 1203, 65], [25, 24, 25, 24, 25, 31, 19, 218, 219, 219, 219, 219, 219, 187, 187, 188, 18, 17, 18, 21, 23, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 146, 134, 135, 1, 1, 105, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 20, 120, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 96, 97, 97, 98, 1169, 1170, 1171, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 15, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 156, 1215, 1216, 72], [117, 118, 117, 118, 45, 52, 19, 186, 187, 187, 187, 187, 187, 187, 187, 188, 17, 18, 21, 18, 43, 44, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 146, 135, 1, 105, 120, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 39, 40, 39, 40, 515, 23, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 260, 115, 116, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 105, 1217, 1201, 156, 156, 156, 1200, 1201, 1218, 1218, 1218, 1218, 1218, 156, 1220, 1221, 72], [25, 24, 25, 31, 19, 19, 19, 186, 187, 187, 192, 192, 192, 192, 192, 193, 39, 21, 39, 21, 39, 21, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 134, 134, 135, 1, 15, 1, 105, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 18, 957, 814, 815, 39, 120, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 114, 115, 116, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 105, 1217, 1201, 156, 156, 156, 1200, 1201, 1222, 1222, 1222, 1222, 1222, 156, 1215, 1216, 237], [1246, 1247, 1248, 52, 57, 57, 379, 1249, 1250, 1251, 211, 57, 57, 57, 1252, 126, 126, 126, 126, 126, 1253, 57, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 146, 135, 146, 135, 105, 43, 44, 45, 44, 45, 44, 45, 44, 45, 52, 258, 40, 980, 845, 966, 18, 23, 24, 25, 24, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 96, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 98, 38, 38, 114, 115, 116, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 105, 1217, 1201, 156, 156, 156, 1200, 1201, 1223, 1224, 1225, 1223, 1225, 156, 1220, 1221, 156], [1, 1, 15, 127, 1254, 1255, 1255, 1256, 1256, 1256, 1255, 1255, 1257, 125, 33, 1, 1, 1, 1, 1, 15, 127, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 15, 1, 15, 105, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 350, 17, 980, 845, 966, 40, 43, 44, 45, 52, 20, 957, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 814, 815, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 111, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 113, 38, 38, 114, 115, 116, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 105, 1217, 1201, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 156, 156, 1215, 1216], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 33, 1, 1, 1, 1, 1, 15, 105, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 15, 1, 15, 105, 17, 20, 296, 297, 296, 297, 296, 297, 296, 297, 20, 39, 980, 845, 966, 39, 17, 18, 17, 18, 17, 980, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 111, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 113, 38, 38, 114, 115, 116, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 105, 1217, 1201, 156, 156, 156, 1200, 1201, 156, 156, 256, 959, 329, 330, 156, 1220, 1221], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 33, 1, 1, 1, 1, 1, 15, 105, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 15, 1, 15, 105, 20, 211, 23, 31, 23, 31, 23, 31, 23, 31, 379, 18, 980, 845, 1025, 814, 814, 814, 814, 814, 814, 965, 845, 986, 885, 1258, 1259, 1259, 1259, 1259, 1260, 1036, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1261, 1126, 1126, 1126, 1126, 1126, 1126, 1126, 1126, 1126, 1126, 1126, 1262, 38, 38, 114, 115, 116, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 15, 105, 1217, 1201, 1218, 1218, 1218, 1218, 1218, 156, 156, 67, 17, 18, 64, 156, 1213, 1214], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 33, 1, 1, 1, 1, 1, 15, 105, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 15, 1, 15, 105, 18, 42, 120, 118, 117, 118, 117, 118, 117, 119, 258, 19, 980, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 966, 20, 355, 356, 356, 356, 356, 357, 980, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 99, 100, 100, 100, 100, 100, 100, 367, 115, 116, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 5, 105, 1217, 1201, 1222, 1222, 1222, 1222, 1222, 156, 156, 67, 39, 40, 64, 156, 1202, 1203], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 33, 1, 1, 1, 1, 1, 146, 146, 126, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 1, 15, 1, 15, 105, 18, 42, 23, 24, 25, 24, 25, 24, 25, 31, 258, 17, 980, 845, 986, 885, 1263, 1264, 1264, 1265, 1266, 885, 885, 987, 20, 360, 361, 361, 361, 361, 362, 980, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 17, 18, 17, 18, 17, 18, 114, 115, 115, 115, 115, 115, 115, 115, 115, 116, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 15, 1, 105, 1217, 1201, 1223, 1224, 1225, 1223, 1225, 156, 156, 67, 17, 18, 64, 1215, 1216, 156], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 1, 1, 2, 5, 1, 15, 105, 17, 42, 120, 118, 117, 118, 117, 118, 117, 119, 258, 19, 980, 845, 966, 1267, 1268, 1269, 1270, 1271, 1272, 17, 18, 17, 368, 369, 370, 371, 372, 373, 375, 980, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 114, 115, 259, 123, 123, 123, 123, 123, 123, 124, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 5, 1, 105, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 67, 39, 40, 64, 1220, 1221, 156], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 1, 1, 1, 33, 1, 1, 15, 1, 1, 15, 105, 18, 42, 23, 24, 25, 24, 25, 24, 25, 31, 258, 18, 980, 845, 966, 405, 1273, 1274, 1275, 1276, 1277, 39, 40, 39, 388, 389, 390, 391, 162, 392, 394, 980, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 57, 57, 57, 57, 379, 18, 17, 18, 114, 115, 116, 38, 38, 38, 38, 211, 57, 57, 57, 57, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 5, 1, 1, 1, 105, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 84, 54, 54, 147, 156, 1215, 1216], [1, 1, 15, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 6, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 5, 2, 7, 7, 7, 7, 7, 7, 7, 7, 4, 1, 33, 1, 1, 1, 6, 3, 3, 5, 1, 2, 5, 105, 40, 42, 120, 118, 117, 118, 117, 118, 117, 119, 258, 19, 980, 845, 966, 1278, 1279, 1280, 1281, 1282, 1283, 17, 18, 17, 17, 18, 17, 18, 17, 18, 20, 1141, 885, 987, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 39, 40, 1177, 1178, 1179, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 296, 297, 296, 297, 258, 40, 39, 40, 114, 115, 116, 38, 38, 38, 38, 42, 296, 297, 296, 297, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 8, 9, 8, 9, 8, 1284, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221], [2, 3, 5, 105, 102, 103, 103, 103, 103, 103, 103, 103, 104, 132, 1, 1, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 1, 1, 105, 18, 17, 18, 17, 18, 17, 18, 17, 132, 1, 6, 3, 4, 1, 1, 1, 1, 1, 2, 5, 1, 105, 39, 42, 23, 24, 25, 24, 25, 24, 25, 31, 258, 17, 980, 845, 966, 422, 423, 423, 423, 1285, 1286, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 17, 18, 1287, 1288, 1289, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 23, 31, 258, 18, 17, 18, 114, 115, 116, 38, 38, 38, 38, 42, 23, 31, 23, 31, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 156, 156, 1213, 1214], [15, 2, 7, 16, 1290, 1291, 1291, 1292, 1293, 1294, 1291, 1291, 1295, 32, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16, 326, 79, 79, 80, 18, 326, 79, 80, 132, 1, 1, 1, 6, 3, 3, 3, 3, 3, 5, 1, 1, 105, 18, 42, 120, 118, 117, 118, 117, 118, 117, 119, 258, 19, 980, 845, 966, 39, 17, 18, 17, 18, 17, 39, 17, 39, 39, 17, 39, 18, 39, 18, 39, 21, 39, 21, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 39, 40, 39, 40, 39, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 40, 39, 40, 114, 115, 116, 38, 38, 38, 38, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 156, 156, 1202, 1203], [15, 105, 211, 57, 1296, 1297, 1297, 1298, 1299, 1300, 1297, 1297, 1301, 57, 379, 57, 57, 57, 57, 57, 57, 57, 81, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 83, 17, 18, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 7, 16, 39, 42, 23, 24, 25, 24, 25, 24, 25, 31, 258, 18, 980, 845, 966, 18, 39, 40, 39, 40, 39, 17, 39, 17, 18, 39, 39, 18, 18, 39, 21, 18, 21, 18, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 96, 97, 97, 98, 99, 100, 101, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 23, 31, 477, 57, 57, 379, 114, 115, 116, 211, 57, 57, 57, 136, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 1223, 1225, 1200, 1201, 1223, 1224, 1224, 1224, 1224, 1225, 156, 156, 1213, 1214], [15, 105, 42, 19, 1302, 1303, 1303, 1304, 162, 1305, 1303, 1303, 1306, 19, 258, 81, 82, 82, 82, 82, 82, 82, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71, 296, 297, 32, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16, 17, 18, 18, 42, 43, 44, 45, 44, 45, 44, 45, 52, 258, 19, 980, 845, 966, 17, 1307, 1308, 1309, 1310, 1311, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 296, 297, 39, 258, 114, 115, 116, 42, 296, 297, 296, 297, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203], [15, 105, 42, 19, 19, 1312, 1313, 1314, 1315, 1316, 1313, 1312, 19, 19, 258, 88, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 90, 23, 31, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 18, 17, 56, 57, 57, 57, 57, 57, 57, 57, 57, 350, 17, 346, 845, 966, 1267, 1268, 1269, 1270, 1271, 1272, 17, 17, 18, 17, 17, 453, 454, 455, 456, 17, 17, 18, 17, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 23, 31, 23, 31, 17, 258, 114, 115, 116, 42, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156], [15, 105, 42, 81, 82, 82, 82, 82, 82, 82, 82, 82, 82, 83, 258, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 125, 126, 126, 126, 126, 127, 18, 17, 17, 18, 17, 18, 120, 119, 40, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 40, 39, 40, 39, 957, 814, 814, 814, 814, 814, 814, 965, 845, 966, 405, 1273, 1274, 1275, 1276, 1277, 40, 957, 814, 815, 40, 463, 464, 465, 466, 40, 957, 814, 815, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 44, 45, 44, 45, 44, 45, 52, 39, 258, 114, 115, 116, 42, 120, 118, 117, 118, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1237, 1225, 156, 156, 1218, 1218, 1218, 1218, 1200, 1201, 156, 156, 156, 1220, 1221, 65], [15, 105, 42, 88, 89, 89, 89, 89, 89, 89, 89, 89, 89, 90, 258, 326, 79, 79, 79, 79, 1317, 80, 96, 97, 97, 97, 97, 98, 132, 133, 134, 134, 135, 105, 326, 80, 18, 18, 326, 80, 23, 31, 18, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 18, 17, 18, 17, 980, 845, 845, 845, 845, 845, 845, 845, 845, 966, 1278, 1318, 1280, 1319, 1320, 1321, 18, 980, 845, 966, 18, 473, 474, 475, 476, 18, 980, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 54, 54, 54, 54, 54, 54, 54, 165, 258, 122, 123, 124, 42, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 1222, 1222, 1222, 1222, 1200, 1201, 156, 156, 156, 1213, 1214, 72], [15, 105, 42, 326, 79, 79, 79, 79, 79, 80, 20, 40, 326, 80, 258, 38, 38, 38, 38, 38, 38, 38, 111, 112, 112, 112, 112, 113, 132, 33, 1, 1, 15, 105, 38, 38, 38, 38, 38, 38, 120, 119, 40, 114, 115, 259, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 40, 39, 39, 17, 1141, 885, 885, 885, 885, 885, 885, 1036, 845, 966, 422, 1322, 423, 1323, 1324, 1325, 17, 980, 845, 966, 17, 490, 491, 333, 492, 17, 980, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 66, 67, 258, 40, 39, 40, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 1223, 1225, 1223, 1225, 1200, 1201, 1226, 1228, 156, 1202, 1203, 72], [15, 105, 42, 40, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 258, 38, 38, 38, 38, 38, 38, 38, 111, 112, 112, 112, 112, 113, 132, 33, 1, 1, 15, 105, 38, 38, 38, 38, 38, 38, 23, 31, 17, 114, 115, 116, 125, 126, 126, 126, 126, 126, 126, 126, 127, 17, 20, 18, 17, 18, 39, 17, 17, 18, 17, 18, 17, 18, 980, 845, 1025, 814, 814, 814, 814, 814, 814, 814, 965, 845, 1025, 814, 814, 814, 845, 814, 814, 965, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 67, 258, 17, 18, 17, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 1229, 1231, 156, 1213, 1214, 72], [15, 105, 42, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 258, 38, 38, 38, 38, 38, 38, 38, 111, 112, 112, 112, 112, 113, 132, 33, 1, 1, 15, 105, 38, 38, 38, 38, 38, 38, 120, 119, 39, 114, 115, 116, 132, 1, 1, 133, 134, 134, 135, 1, 105, 39, 40, 39, 40, 17, 18, 39, 396, 397, 397, 398, 18, 40, 980, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 926, 67, 258, 39, 40, 39, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 1223, 1225, 156, 1202, 1203, 72], [15, 105, 56, 57, 17, 18, 17, 346, 57, 57, 57, 57, 57, 57, 350, 38, 38, 38, 38, 38, 38, 38, 128, 128, 128, 128, 128, 128, 132, 6, 3, 3, 5, 105, 38, 38, 38, 38, 38, 38, 23, 31, 17, 114, 115, 116, 132, 1, 133, 155, 1, 1, 15, 1, 105, 296, 297, 296, 297, 39, 40, 17, 422, 438, 406, 407, 40, 18, 980, 845, 986, 885, 1326, 1327, 1328, 1329, 1330, 885, 1036, 845, 986, 885, 885, 885, 885, 885, 885, 1036, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 926, 156, 1215, 1216, 1213, 1214, 156, 156, 156, 1331, 1332, 1333, 1334, 1335, 156, 156, 67, 258, 17, 18, 17, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 1213, 1214, 156, 72], [15, 146, 126, 127, 39, 40, 20, 18, 17, 18, 17, 18, 17, 18, 17, 38, 38, 38, 38, 38, 38, 38, 40, 39, 40, 39, 40, 39, 132, 1, 1, 1, 1, 105, 38, 38, 38, 38, 38, 38, 43, 52, 39, 122, 123, 124, 132, 1, 33, 1, 1, 1, 146, 135, 105, 23, 31, 23, 31, 40, 296, 297, 39, 405, 406, 522, 398, 17, 980, 845, 966, 17, 300, 301, 302, 303, 304, 17, 980, 845, 966, 40, 21, 18, 21, 18, 18, 980, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 1336, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 1213, 1214, 1220, 1221, 1337, 1338, 1339, 1339, 1340, 300, 301, 302, 303, 304, 1341, 1339, 1342, 1343, 39, 40, 39, 1344, 1345, 1346, 1345, 1347, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1244, 1218, 1218, 1218, 1200, 1201, 156, 156, 1200, 1201, 156, 156, 1202, 1203, 156, 72], [146, 134, 135, 105, 17, 18, 17, 40, 39, 40, 39, 40, 39, 40, 17, 17, 18, 17, 18, 17, 18, 17, 40, 39, 40, 39, 40, 39, 32, 7, 7, 7, 7, 16, 18, 17, 17, 18, 17, 18, 17, 18, 17, 40, 39, 40, 132, 1, 33, 1, 1, 1, 1, 15, 105, 43, 44, 45, 52, 18, 23, 31, 40, 422, 423, 423, 424, 39, 980, 845, 966, 20, 308, 309, 310, 311, 312, 20, 980, 845, 966, 18, 18, 21, 40, 21, 40, 980, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 926, 156, 1202, 1203, 156, 256, 1348, 1349, 1349, 1349, 1350, 308, 309, 310, 311, 312, 1348, 1349, 1349, 1350, 17, 18, 17, 1348, 1349, 1349, 1349, 1350, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1245, 1222, 1222, 1222, 1200, 1201, 156, 156, 1200, 1201, 156, 156, 156, 1213, 1214, 237], [1, 1, 15, 105, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 18, 17, 326, 79, 79, 79, 80, 132, 1, 33, 1, 1, 1, 1, 15, 105, 99, 100, 100, 101, 40, 43, 52, 18, 17, 18, 17, 18, 17, 980, 845, 966, 17, 317, 318, 319, 320, 321, 17, 980, 845, 966, 17, 21, 18, 21, 18, 18, 980, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1215, 1216, 156, 156, 67, 1351, 1352, 1353, 1354, 1355, 317, 318, 319, 320, 321, 1351, 1353, 1354, 1355, 17, 18, 17, 1356, 1357, 1353, 1354, 1355, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 1223, 1225, 1200, 1201, 156, 256, 17, 18, 128, 329, 330, 1202, 1203, 156], [1, 1, 15, 105, 81, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 83, 132, 1, 33, 1, 1, 1, 1, 15, 105, 114, 115, 115, 116, 96, 97, 97, 97, 97, 98, 39, 40, 39, 980, 845, 966, 20, 331, 332, 333, 334, 335, 20, 980, 845, 966, 40, 17, 21, 40, 21, 17, 980, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1220, 1221, 156, 156, 67, 1358, 1359, 1360, 1361, 1362, 331, 332, 333, 334, 335, 1358, 1363, 1364, 1365, 39, 40, 39, 1366, 1367, 1363, 1364, 1365, 57, 57, 57, 346, 57, 57, 57, 57, 57, 57, 57, 22, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 1200, 1201, 156, 67, 17, 18, 17, 18, 64, 156, 1215, 1216], [1, 1, 15, 105, 69, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71, 132, 1, 33, 1, 1, 1, 1, 15, 105, 122, 260, 115, 116, 111, 112, 112, 112, 112, 113, 17, 18, 17, 980, 845, 1025, 814, 814, 814, 845, 814, 814, 814, 965, 845, 1025, 814, 814, 814, 814, 814, 814, 965, 845, 966, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 156, 67, 116, 17, 1368, 1369, 1370, 17, 20, 17, 20, 17, 20, 17, 20, 17, 17, 18, 17, 17, 20, 17, 20, 17, 20, 20, 17, 20, 17, 20, 17, 20, 20, 17, 20, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 1200, 1201, 156, 67, 39, 40, 39, 40, 64, 156, 1220, 1221], [1, 1, 15, 105, 88, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 90, 132, 133, 155, 1, 1, 1, 1, 15, 105, 20, 122, 123, 124, 111, 112, 112, 112, 112, 113, 39, 40, 39, 980, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 845, 966, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 67, 354, 100, 100, 100, 100, 100, 101, 39, 20, 39, 20, 39, 20, 39, 39, 40, 39, 39, 20, 39, 20, 39, 20, 20, 336, 86, 86, 86, 86, 86, 87, 39, 20, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 1218, 1218, 1218, 1218, 39, 40, 39, 40, 64, 156, 1215, 1216], [1, 1, 15, 146, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 155, 33, 1, 1, 1, 1, 1, 15, 105, 17, 20, 17, 18, 111, 112, 112, 112, 112, 113, 17, 18, 17, 1141, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 885, 987, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1215, 1216, 156, 156, 156, 156, 67, 115, 115, 115, 115, 115, 115, 354, 100, 100, 100, 100, 101, 20, 17, 17, 18, 17, 396, 397, 397, 398, 17, 20, 17, 106, 35, 35, 35, 35, 35, 91, 17, 20, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 1222, 1222, 1222, 1222, 17, 18, 17, 18, 64, 156, 1220, 1221], [1, 1, 146, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 134, 155, 1, 1, 1, 1, 1, 15, 325, 79, 79, 1317, 80, 111, 112, 112, 112, 112, 113, 326, 1317, 80, 39, 39, 40, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1220, 1221, 156, 156, 156, 156, 84, 54, 54, 54, 54, 54, 55, 115, 115, 115, 115, 115, 354, 101, 39, 20, 39, 20, 405, 406, 406, 407, 39, 20, 39, 106, 35, 94, 92, 93, 35, 91, 39, 20, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 1223, 1225, 1223, 1225, 54, 54, 54, 54, 147, 1213, 1214, 156], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 105, 17, 18, 17, 18, 128, 128, 128, 128, 128, 128, 40, 18, 17, 515, 39, 39, 17, 18, 39, 17, 18, 21, 18, 21, 18, 21, 17, 18, 39, 21, 17, 21, 39, 21, 40, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 115, 115, 115, 115, 115, 115, 354, 100, 101, 17, 20, 405, 406, 406, 407, 17, 20, 17, 106, 35, 91, 17, 106, 35, 91, 17, 20, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 65], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 105, 39, 40, 39, 40, 39, 17, 40, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 17, 20, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 84, 54, 54, 54, 54, 54, 55, 115, 115, 116, 39, 20, 422, 423, 423, 424, 39, 20, 39, 106, 35, 85, 86, 345, 35, 91, 39, 20, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 18, 17, 18, 336, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 87, 38, 38, 38, 38, 336, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 87, 38, 38, 38, 17, 18, 17, 18, 17, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 72], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 2, 1371, 297, 296, 297, 296, 297, 296, 297, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 39, 17, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 115, 115, 116, 17, 20, 17, 20, 17, 20, 17, 20, 17, 106, 35, 35, 35, 35, 35, 91, 39, 20, 42, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 45, 1372, 1247, 1247, 1248, 44, 117, 119, 40, 39, 40, 106, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 106, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 39, 40, 39, 40, 39, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 156, 1202, 1203, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 105, 105, 23, 31, 23, 31, 23, 31, 23, 31, 122, 123, 123, 123, 123, 123, 123, 123, 260, 115, 115, 259, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 17, 20, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 1373, 1374, 1374, 1374, 1375, 156, 156, 1341, 1342, 1376, 1377, 116, 39, 20, 39, 20, 453, 454, 455, 456, 20, 516, 92, 92, 92, 92, 92, 95, 17, 20, 42, 23, 24, 25, 24, 25, 24, 25, 24, 25, 31, 125, 33, 1, 1, 15, 127, 23, 31, 18, 17, 18, 106, 35, 94, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 92, 93, 35, 91, 38, 38, 38, 38, 106, 35, 94, 92, 92, 92, 92, 92, 92, 92, 92, 92, 93, 35, 91, 38, 38, 38, 17, 18, 17, 18, 17, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 156, 1215, 1216, 237], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 105, 105, 120, 118, 117, 118, 117, 118, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 114, 115, 115, 116, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 156, 156, 256, 1378, 1378, 1378, 1379, 1380, 1380, 1380, 1381, 1378, 1378, 1348, 1349, 1349, 1350, 116, 17, 20, 17, 20, 463, 464, 465, 466, 20, 39, 20, 39, 20, 39, 39, 20, 17, 20, 136, 43, 44, 45, 44, 45, 44, 45, 44, 45, 52, 132, 33, 1, 1, 15, 105, 120, 119, 40, 39, 40, 106, 35, 91, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 38, 38, 38, 38, 38, 516, 92, 95, 38, 38, 38, 18, 40, 39, 316, 39, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 1237, 1225, 1223, 1224, 1224, 1225, 1200, 1201, 1223, 1223, 1224, 1225, 156, 1220, 1221, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 105, 105, 23, 24, 25, 24, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 114, 115, 115, 116, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1220, 1221, 156, 156, 156, 67, 115, 115, 115, 1382, 1383, 1384, 1385, 1386, 115, 115, 1351, 1352, 1354, 1355, 116, 39, 20, 39, 20, 473, 474, 475, 476, 20, 17, 20, 17, 20, 17, 20, 20, 39, 20, 19, 19, 20, 17, 20, 17, 20, 18, 17, 18, 20, 132, 6, 3, 3, 5, 105, 23, 31, 18, 17, 18, 106, 35, 91, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 17, 18, 17, 18, 17, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 105, 105, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 114, 115, 115, 116, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 156, 1215, 1216, 156, 156, 67, 115, 115, 346, 1387, 1359, 1388, 1389, 1390, 260, 115, 1358, 1359, 1391, 1392, 124, 17, 20, 17, 20, 490, 491, 333, 492, 514, 108, 108, 108, 108, 108, 108, 108, 108, 109, 19, 19, 57, 57, 515, 57, 57, 57, 57, 57, 346, 32, 7, 307, 7, 7, 16, 43, 52, 40, 39, 40, 106, 35, 91, 38, 38, 38, 38, 336, 86, 86, 86, 86, 86, 86, 86, 345, 35, 91, 38, 38, 38, 38, 106, 35, 85, 86, 86, 86, 86, 86, 86, 86, 87, 38, 38, 38, 38, 38, 38, 38, 18, 57, 57, 57, 621, 622, 622, 622, 622, 623, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 105, 105, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 114, 115, 115, 116, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 1336, 111, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1220, 1221, 156, 156, 67, 115, 115, 115, 116, 39, 1368, 1369, 1370, 122, 123, 124, 17, 1393, 1394, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 346, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 40, 336, 86, 86, 86, 86, 345, 35, 91, 38, 38, 38, 38, 106, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 106, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 38, 38, 38, 39, 18, 17, 1053, 626, 627, 627, 627, 627, 628, 979, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 22, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 1215, 1216, 156, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 105, 105, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 114, 115, 115, 116, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1213, 1214, 156, 156, 156, 67, 115, 259, 123, 124, 39, 20, 39, 39, 20, 39, 20, 39, 20, 39, 20, 39, 20, 39, 20, 39, 20, 17, 20, 17, 20, 17, 39, 20, 39, 20, 39, 20, 39, 20, 39, 20, 39, 20, 39, 20, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 106, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 106, 35, 94, 92, 92, 92, 92, 92, 93, 35, 91, 38, 38, 38, 38, 106, 35, 94, 92, 92, 92, 92, 92, 93, 35, 91, 38, 38, 38, 38, 336, 86, 86, 87, 40, 99, 1002, 650, 651, 651, 651, 651, 652, 1003, 100, 100, 100, 100, 100, 101, 39, 40, 39, 40, 39, 40, 39, 56, 249, 249, 249, 249, 249, 249, 1226, 346, 156, 156, 156, 156, 1220, 1221, 156, 65], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 114, 115, 115, 116, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1202, 1203, 156, 156, 156, 67, 115, 116, 39, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 39, 20, 20, 17, 17, 17, 478, 479, 483, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 516, 92, 92, 92, 92, 93, 35, 85, 86, 86, 86, 86, 345, 35, 91, 38, 38, 38, 38, 38, 106, 35, 85, 86, 86, 86, 86, 345, 35, 91, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 106, 35, 35, 91, 18, 114, 1023, 653, 654, 654, 654, 654, 655, 1024, 115, 115, 115, 115, 115, 116, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 1395, 1396, 156, 156, 156, 1215, 1216, 156, 65, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 45, 44, 45, 44, 45, 44, 45, 52, 114, 115, 115, 116, 43, 44, 45, 44, 45, 44, 45, 44, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1213, 1214, 156, 156, 156, 67, 115, 116, 17, 347, 348, 348, 348, 348, 348, 349, 20, 39, 99, 100, 100, 100, 101, 39, 20, 1397, 1398, 1398, 1399, 53, 54, 165, 17, 1400, 1401, 1402, 39, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 165, 17, 18, 106, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 38, 106, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 106, 35, 94, 95, 40, 122, 1034, 633, 635, 635, 635, 635, 636, 1035, 123, 123, 123, 123, 123, 124, 17, 18, 17, 18, 17, 18, 17, 211, 57, 57, 57, 57, 57, 57, 1229, 1231, 156, 156, 156, 1220, 1221, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 17, 18, 17, 18, 17, 18, 114, 115, 115, 116, 18, 17, 18, 17, 18, 21, 20, 21, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1202, 1203, 156, 156, 156, 67, 115, 116, 39, 355, 356, 356, 356, 356, 356, 357, 20, 99, 367, 115, 115, 115, 354, 101, 20, 1348, 1349, 1349, 1350, 64, 156, 67, 39, 1403, 1404, 1405, 39, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 39, 40, 516, 92, 92, 92, 92, 92, 92, 92, 92, 95, 38, 38, 38, 38, 38, 516, 92, 92, 92, 92, 92, 92, 93, 35, 91, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 106, 35, 91, 40, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 1406, 53, 54, 54, 54, 54, 54, 1200, 1201, 156, 156, 156, 1213, 1214, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 39, 40, 39, 40, 296, 297, 114, 115, 115, 354, 100, 100, 100, 100, 100, 100, 100, 101, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1215, 1216, 156, 156, 67, 115, 116, 368, 360, 361, 361, 361, 361, 361, 362, 20, 114, 238, 54, 54, 55, 115, 116, 20, 1351, 1352, 1354, 1355, 64, 156, 67, 17, 1407, 481, 1408, 18, 64, 156, 156, 156, 156, 156, 156, 156, 156, 239, 240, 239, 240, 239, 240, 239, 240, 239, 240, 239, 240, 67, 17, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 38, 106, 35, 91, 38, 38, 38, 38, 106, 35, 91, 18, 18, 17, 18, 17, 296, 297, 296, 297, 296, 297, 296, 297, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 1202, 1203, 156, 237, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 17, 18, 17, 18, 23, 31, 122, 123, 123, 123, 123, 123, 123, 123, 260, 115, 115, 116, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1220, 1221, 156, 156, 67, 1409, 1410, 388, 369, 370, 371, 372, 373, 374, 375, 57, 114, 64, 156, 156, 67, 115, 354, 100, 1358, 1359, 1391, 1392, 64, 156, 67, 39, 494, 481, 495, 20, 64, 256, 1411, 1412, 1412, 1412, 1412, 1412, 1413, 251, 252, 251, 252, 251, 252, 251, 252, 251, 252, 251, 252, 1414, 437, 40, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 106, 35, 85, 86, 86, 86, 86, 86, 345, 35, 91, 38, 38, 38, 38, 106, 35, 91, 39, 40, 39, 40, 39, 23, 31, 23, 31, 23, 31, 23, 31, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 1213, 1214, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 326, 79, 79, 79, 79, 80, 120, 119, 326, 79, 79, 79, 79, 80, 39, 40, 122, 123, 123, 124, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 926, 156, 1215, 1216, 156, 156, 67, 115, 116, 17, 389, 390, 391, 162, 392, 393, 394, 17, 114, 64, 156, 156, 67, 115, 115, 115, 259, 124, 1393, 1394, 64, 156, 84, 54, 1415, 1416, 1417, 54, 147, 67, 132, 1, 1, 1, 1, 1, 105, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 296, 297, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 106, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 106, 35, 91, 17, 18, 17, 18, 17, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 1202, 1203, 156, 237], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 20, 21, 39, 40, 20, 21, 23, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1220, 1221, 156, 156, 67, 115, 354, 100, 100, 100, 101, 17, 18, 17, 18, 17, 114, 64, 156, 156, 84, 54, 54, 54, 54, 54, 54, 54, 147, 156, 156, 156, 1415, 1416, 1417, 156, 156, 67, 132, 1, 1, 1, 1, 1, 105, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 23, 31, 40, 336, 86, 87, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 106, 35, 94, 92, 92, 92, 92, 92, 93, 35, 91, 38, 38, 38, 38, 106, 35, 91, 39, 40, 39, 40, 39, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 1213, 1214, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 21, 20, 17, 18, 21, 17, 120, 119, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 156, 67, 115, 115, 115, 115, 115, 354, 100, 100, 100, 100, 100, 367, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1415, 1416, 1417, 156, 156, 67, 132, 1, 1, 1, 1, 1, 105, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 18, 106, 35, 85, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 345, 35, 91, 38, 38, 38, 38, 38, 106, 35, 85, 86, 86, 86, 86, 345, 35, 91, 17, 18, 17, 18, 17, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 1202, 1203, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 20, 21, 39, 40, 20, 21, 23, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 67, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 64, 156, 1418, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1419, 1416, 1416, 1417, 156, 156, 67, 32, 3, 3, 3, 3, 3, 16, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 40, 106, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 91, 38, 38, 38, 38, 38, 106, 35, 35, 35, 35, 35, 35, 35, 35, 91, 39, 40, 39, 40, 39, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 156, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 21, 20, 17, 18, 21, 20, 120, 119, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 156, 84, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 156, 1415, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1417, 156, 156, 84, 1196, 1197, 54, 54, 54, 54, 54, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 296, 1420, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1423, 1424, 1425, 1424, 1425, 1424, 1420, 1421, 1422, 1421, 1422, 1421, 1422, 1421, 1422, 1426, 297, 296, 297, 296, 297, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1218, 1218, 1218, 1218, 1200, 1201, 156, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 326, 79, 79, 79, 79, 80, 23, 31, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1415, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1416, 1417, 156, 156, 156, 1202, 1203, 156, 156, 65, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 1222, 1222, 1222, 1222, 1200, 1201, 156, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 21, 39, 40, 39, 40, 43, 52, 40, 17, 40, 99, 100, 100, 100, 100, 100, 100, 100, 101, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1415, 1416, 1417, 1427, 1427, 1427, 1427, 1427, 1427, 1427, 1427, 1427, 1427, 1427, 1427, 1428, 156, 156, 156, 1213, 1214, 156, 65, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1223, 1224, 1225, 1224, 1200, 1201, 156, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 21, 39, 17, 39, 17, 39, 40, 17, 18, 18, 17, 114, 115, 259, 123, 123, 123, 123, 123, 124, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1429, 1430, 1415, 1416, 1417, 1429, 1430, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 156, 1215, 1216, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 21, 39, 40, 39, 40, 17, 39, 40, 40, 39, 122, 123, 124, 38, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 1336, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1431, 1432, 1433, 1434, 1435, 1431, 1432, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 156, 1220, 1221, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 296, 297, 39, 40, 39, 40, 39, 40, 296, 297, 296, 297, 296, 297, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 66, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1213, 1214, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1202, 1203, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 1213, 1214, 156, 1202, 1203, 156, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1443, 128, 1444, 685, 685, 685, 1445, 128, 128, 17, 18, 330, 1213, 1214, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 23, 31, 326, 79, 79, 79, 79, 80, 23, 31, 23, 31, 23, 31, 38, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 66, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 1213, 1214, 1220, 1221, 1202, 1203, 1446, 1447, 1403, 1404, 1405, 1448, 1446, 156, 156, 1202, 1203, 1220, 1221, 156, 156, 156, 156, 1202, 1203, 156, 1215, 1216, 156, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1443, 39, 690, 692, 691, 691, 693, 21, 40, 21, 40, 64, 1202, 1203, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 43, 52, 17, 40, 17, 40, 17, 40, 43, 44, 45, 44, 45, 52, 38, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 66, 156, 1220, 1221, 1215, 1216, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 67, 1407, 481, 1408, 64, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 1220, 1221, 156, 65, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1443, 17, 706, 634, 1e3, 1001, 709, 17, 21, 17, 18, 64, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 40, 17, 40, 17, 40, 17, 40, 17, 40, 17, 40, 99, 100, 101, 38, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 156, 156, 156, 1220, 1221, 1213, 1214, 1213, 1214, 156, 156, 156, 65, 72, 66, 156, 67, 1449, 481, 1450, 64, 156, 65, 72, 72, 72, 66, 156, 1202, 1203, 1213, 1214, 1215, 1216, 1213, 1214, 156, 156, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1443, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 64, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 39, 40, 39, 99, 100, 100, 100, 100, 100, 100, 100, 367, 115, 116, 40, 17, 40, 21, 17, 21, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 66, 156, 156, 1202, 1203, 1202, 1203, 156, 65, 72, 72, 72, 72, 66, 67, 1449, 481, 1450, 64, 65, 72, 72, 72, 72, 72, 72, 66, 156, 1202, 1203, 1220, 1221, 1202, 1203, 156, 65, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1443, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 64, 156, 1215, 1216], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 18, 17, 114, 115, 115, 259, 123, 123, 123, 123, 123, 123, 124, 17, 40, 21, 17, 21, 40, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 67, 1449, 481, 1450, 64, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 156, 1220, 1221], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 326, 80, 17, 1016, 377, 377, 378, 17, 40, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 80, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 17, 18, 39, 114, 115, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 17, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 260, 115, 115, 116, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 1218, 156, 156, 1213, 1214, 156, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 114, 115, 115, 116, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 111, 112, 112, 113, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 156, 156, 1202, 1203, 156, 65], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 38, 38, 38, 38, 38, 38, 114, 115, 115, 116, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 128, 128, 128, 128, 114, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1237, 1225, 1223, 1224, 1224, 1225, 1200, 1201, 1223, 1225, 156, 156, 1213, 1214, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 38, 38, 38, 38, 38, 38, 114, 115, 115, 116, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 99, 100, 367, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 156, 1202, 1203, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 43, 44, 45, 44, 45, 44, 45, 44, 45, 52, 38, 38, 38, 38, 38, 38, 1016, 377, 377, 378, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 114, 115, 115, 115, 116, 111, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 1215, 1216, 156, 65, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 21, 39, 21, 39, 18, 17, 18, 17, 18, 38, 38, 38, 38, 38, 38, 114, 115, 115, 116, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 122, 123, 123, 123, 346, 111, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 156, 1220, 1221, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 21, 17, 21, 39, 20, 40, 39, 40, 39, 40, 38, 38, 38, 38, 38, 38, 114, 115, 115, 116, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 96, 97, 97, 97, 97, 1451, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1452, 1452, 1452, 1452, 330, 156, 1200, 1201, 156, 156, 156, 156, 1215, 1216, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 115, 116, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 17, 18, 17, 19, 64, 156, 1200, 1201, 156, 156, 156, 156, 1220, 1221, 237, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 122, 123, 123, 123, 123, 123, 123, 123, 123, 260, 115, 115, 259, 123, 123, 123, 123, 123, 123, 124, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 39, 40, 39, 20, 1244, 1218, 1200, 1201, 156, 156, 156, 156, 1213, 1214, 156, 237], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 326, 79, 79, 80, 18, 17, 17, 346, 326, 376, 377, 377, 1193, 79, 79, 79, 79, 79, 79, 80, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 17, 18, 19, 20, 1245, 1222, 1200, 1201, 156, 156, 156, 156, 1202, 1203, 156, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 20, 18, 38, 38, 38, 38, 38, 38, 38, 114, 115, 115, 116, 17, 18, 38, 38, 38, 38, 38, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 19, 19, 17, 18, 1237, 1225, 1200, 1201, 1226, 1227, 1227, 1228, 156, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 20, 40, 38, 38, 38, 38, 38, 38, 38, 114, 115, 115, 116, 39, 40, 38, 38, 38, 38, 38, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 39, 40, 39, 40, 64, 156, 1200, 1201, 1229, 1230, 1230, 1231, 156, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 38, 38, 38, 38, 38, 38, 38, 18, 21, 122, 123, 123, 124, 38, 38, 38, 38, 38, 21, 17, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1453, 1454, 1454, 1454, 1455, 1455, 1200, 1201, 1223, 1224, 1224, 1225, 156, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 38, 38, 38, 38, 38, 38, 38, 21, 17, 18, 38, 38, 17, 38, 38, 38, 38, 38, 18, 21, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 1245, 1222, 1222, 1222, 1222, 1222, 1200, 1201, 156, 156, 156, 156, 156, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 57, 57, 57, 57, 57, 57, 57, 57, 57, 379, 38, 38, 211, 57, 57, 57, 57, 57, 57, 57, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1237, 1224, 1224, 1224, 1224, 1225, 1200, 1201, 1218, 1218, 1218, 1218, 156, 156, 1215, 1216], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 296, 1456, 38, 38, 1457, 297, 296, 297, 296, 297, 296, 297, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 1200, 1201, 1222, 1222, 1222, 1222, 156, 156, 1220, 1221], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 1458, 38, 38, 1459, 31, 23, 31, 23, 31, 23, 31, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 64, 156, 156, 156, 156, 156, 1223, 1225, 1223, 1225, 1200, 1201, 156, 156, 1215, 1216], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 38, 38, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1200, 1201, 156, 156, 1220, 1221], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 1460, 1461, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 249, 249, 249, 249, 249, 249, 1244, 1218, 1218, 1218, 1218, 1218, 156, 156, 1213, 1214], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 1462, 1463, 43, 44, 45, 44, 45, 44, 45, 44, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 17, 18, 17, 18, 18, 20, 1245, 1222, 1222, 1222, 1222, 1222, 156, 156, 1202, 1203], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1460, 1464, 1464, 1464, 1464, 1464, 1464, 1464, 1464, 1464, 1465, 1466, 1464, 1464, 1464, 1464, 1464, 1464, 1464, 1467, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 38, 38, 38, 38, 416, 417, 1237, 1225, 1200, 1201, 1223, 1225, 156, 156, 1215, 1216], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1468, 1468, 1469, 1470, 1470, 1470, 1471, 1468, 1468, 1468, 1468, 1469, 1470, 1470, 1470, 1471, 1468, 1468, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 38, 38, 38, 38, 23, 31, 64, 156, 1200, 1201, 156, 156, 156, 156, 1220, 1221], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1473, 1474, 1475, 1476, 1476, 1476, 1477, 1478, 1468, 1473, 1474, 1475, 1476, 1476, 1476, 1477, 1478, 1468, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 38, 38, 38, 38, 120, 119, 64, 156, 1200, 1201, 156, 156, 156, 1213, 1214, 156], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1472, 40, 1479, 1480, 1480, 1480, 1481, 1482, 1468, 1472, 40, 1479, 1480, 1480, 1480, 1481, 1482, 1468, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 38, 38, 38, 38, 23, 31, 64, 156, 1200, 1201, 156, 156, 156, 1202, 1203, 65], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1472, 1483, 1484, 1485, 1486, 1487, 1488, 1482, 1468, 1472, 1483, 1484, 1485, 1486, 1487, 1488, 1482, 1468, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 38, 38, 38, 38, 120, 119, 1217, 1201, 1200, 1201, 156, 156, 156, 1213, 1214, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1472, 58, 509, 1489, 1490, 1491, 512, 1482, 1468, 1472, 58, 509, 1489, 1490, 1491, 512, 1482, 1468, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 38, 38, 38, 38, 23, 31, 1217, 1201, 1200, 1201, 156, 156, 156, 1202, 1203, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1492, 1464, 1493, 1468, 1492, 1464, 1464, 1493, 1468, 1492, 1464, 1493, 1468, 1492, 1464, 1464, 1493, 1468, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 119, 1424, 1425, 1424, 1425, 120, 119, 1217, 1201, 1223, 1225, 156, 156, 1215, 1216, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1494, 1495, 1495, 1495, 1495, 1496, 1497, 1468, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 31, 23, 31, 23, 31, 23, 31, 1217, 1201, 156, 156, 156, 156, 1220, 1221, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1473, 1498, 1499, 1499, 1499, 1499, 1500, 1501, 1502, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 156, 156, 1213, 1214, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1468, 1473, 1503, 1503, 1503, 1503, 346, 1478, 1468, 1472, 1504, 1505, 1505, 1505, 1505, 1506, 1507, 1462, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 156, 156, 1202, 1203, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1468, 1472, 21, 21, 21, 21, 40, 1482, 1468, 1472, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1462, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 128, 128, 128, 128, 128, 128, 128, 128, 128, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 1217, 1201, 156, 156, 156, 156, 1215, 1216, 156, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1468, 1472, 21, 21, 21, 21, 17, 1482, 1468, 1472, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1462, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 1217, 1201, 156, 156, 156, 156, 1220, 1221, 65, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1468, 1472, 515, 18, 40, 18, 40, 1482, 1468, 1492, 1464, 1464, 1493, 1468, 1492, 1464, 1464, 1522, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 119, 1217, 1201, 156, 156, 156, 1213, 1214, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1462, 1468, 1492, 1464, 1464, 1464, 1464, 1464, 1493, 1468, 1473, 1474, 1474, 1474, 1474, 1474, 1474, 1478, 1468, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 39, 40, 1523, 40, 39, 40, 39, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 298, 17, 18, 17, 18, 21, 18, 21, 18, 21, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 21, 18, 21, 17, 21, 17, 21, 18, 17, 18, 17, 18, 17, 396, 397, 397, 397, 398, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 21, 1524, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 20, 23, 31, 1217, 1201, 156, 156, 156, 1202, 1203, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1462, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1525, 1526, 1526, 1526, 346, 1526, 1526, 1527, 1468, 1472, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 17, 18, 96, 97, 97, 97, 97, 97, 97, 97, 98, 1177, 1178, 1179, 17, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 39, 422, 423, 423, 423, 424, 1524, 57, 57, 57, 57, 57, 57, 57, 57, 39, 21, 39, 1528, 18, 40, 515, 57, 57, 57, 57, 57, 57, 296, 297, 296, 297, 20, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 20, 120, 119, 1217, 1201, 156, 156, 156, 1215, 1216, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 1529, 1474, 1474, 1474, 1474, 1530, 54, 54, 1531, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1468, 1472, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 18, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 396, 397, 398, 17, 18, 17, 18, 17, 18, 1532, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 23, 31, 23, 31, 20, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 20, 23, 31, 1217, 1201, 156, 156, 156, 1220, 1221, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 40, 40, 18, 40, 18, 64, 156, 156, 67, 1474, 1474, 1474, 1474, 1474, 1474, 1474, 1474, 1474, 1474, 1533, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 39, 40, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 405, 406, 407, 1524, 57, 57, 57, 57, 57, 1528, 20, 20, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 1524, 57, 57, 57, 57, 57, 17, 18, 120, 118, 117, 119, 296, 1425, 1424, 1425, 1424, 1425, 1424, 1425, 1424, 1425, 1424, 297, 120, 119, 1217, 1201, 156, 156, 156, 156, 1213, 1214, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 296, 297, 296, 297, 17, 64, 156, 156, 67, 40, 17, 40, 17, 40, 17, 40, 296, 297, 296, 297, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 20, 21, 18, 17, 21, 17, 18, 17, 18, 17, 18, 17, 18, 422, 423, 424, 1532, 17, 21, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 17, 18, 17, 1532, 17, 18, 17, 18, 17, 39, 40, 23, 24, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 1217, 1201, 156, 156, 156, 156, 1202, 1203, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 23, 31, 379, 64, 156, 156, 67, 57, 57, 57, 57, 57, 57, 211, 23, 31, 23, 31, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 57, 57, 39, 40, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 39, 40, 1524, 57, 57, 57, 57, 57, 57, 57, 1528, 21, 40, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 1524, 57, 57, 39, 40, 39, 1528, 39, 40, 57, 57, 57, 17, 18, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 1217, 1201, 156, 156, 156, 156, 1215, 1216, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 64, 156, 156, 67, 17, 18, 17, 18, 17, 18, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1175, 1176, 1177, 1178, 1179, 39, 40, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 39, 1180, 1181, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 17, 18, 17, 18, 1532, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 396, 397, 398, 18, 1532, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 17, 18, 1453, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1454, 1226, 1228, 156, 156, 156, 156, 1220, 1221, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 64, 156, 156, 67, 39, 40, 39, 40, 39, 40, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1186, 17, 1177, 1178, 1179, 17, 18, 111, 112, 112, 112, 112, 112, 112, 112, 113, 1177, 1178, 1179, 17, 39, 1187, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 57, 57, 57, 57, 57, 57, 57, 39, 40, 39, 346, 57, 57, 57, 57, 57, 57, 1524, 57, 57, 57, 57, 57, 57, 57, 1528, 17, 18, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 1524, 57, 57, 57, 405, 406, 522, 398, 1528, 39, 40, 57, 57, 57, 57, 57, 57, 57, 57, 346, 57, 57, 39, 40, 1245, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1222, 1229, 1231, 156, 156, 156, 1213, 1214, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 64, 156, 156, 67, 17, 18, 17, 18, 17, 18, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 1190, 1191, 1177, 1178, 1179, 39, 40, 128, 128, 128, 128, 128, 128, 128, 128, 128, 1177, 1178, 1179, 39, 17, 1192, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 21, 17, 21, 17, 18, 17, 99, 100, 101, 17, 18, 17, 18, 17, 18, 17, 1532, 17, 18, 17, 18, 17, 18, 18, 17, 18, 40, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 1532, 17, 20, 17, 422, 423, 423, 424, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 17, 18, 1237, 1224, 1224, 1225, 1223, 1224, 1225, 1223, 1224, 1225, 1223, 1224, 1225, 1223, 1224, 1225, 1223, 1225, 156, 156, 156, 1202, 1203, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 64, 156, 156, 67, 39, 40, 39, 40, 39, 40, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1177, 1178, 1179, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 1177, 1178, 1179, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 21, 40, 21, 40, 17, 40, 39, 114, 115, 116, 211, 416, 417, 416, 417, 416, 417, 1528, 20, 57, 57, 57, 57, 57, 57, 39, 40, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 515, 1528, 20, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 64, 156, 156, 67, 38, 38, 38, 38, 38, 38, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 39, 1177, 1178, 1179, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 1177, 1178, 1179, 39, 40, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 21, 17, 18, 17, 18, 17, 114, 115, 116, 42, 23, 31, 23, 31, 23, 31, 514, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 108, 109, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 1196, 1197, 54, 54, 147, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 156, 1202, 1203, 156, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 64, 156, 156, 67, 38, 38, 38, 38, 38, 38, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 258, 17, 1287, 1288, 1289, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 1287, 1288, 1289, 17, 18, 42, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 296, 297, 296, 297, 296, 297, 20, 114, 115, 116, 42, 120, 118, 117, 118, 117, 118, 53, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 65, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 66, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 156, 156, 1213, 1214, 1220, 1221, 1215, 1216, 1213, 1214, 156, 65, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 64, 156, 156, 67, 38, 38, 38, 38, 38, 38, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 477, 57, 57, 57, 57, 57, 379, 39, 40, 39, 57, 57, 57, 39, 39, 40, 211, 57, 57, 57, 57, 136, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 23, 31, 23, 31, 23, 31, 20, 114, 115, 116, 42, 23, 24, 25, 24, 25, 24, 64, 156, 156, 65, 72, 72, 72, 72, 72, 72, 72, 72, 1534, 1535, 72, 72, 72, 72, 72, 72, 1534, 1535, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 1534, 1535, 72, 72, 66, 156, 156, 156, 1213, 1214, 1213, 1214, 1215, 1216, 1202, 1203, 1220, 1221, 1215, 1216, 156, 156, 1213, 1214, 1202, 1203, 156, 156, 1220, 1221, 1202, 1203, 156, 72, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 64, 156, 156, 67, 38, 38, 38, 38, 38, 38, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 84, 1196, 1197, 54, 54, 54, 165, 258, 1169, 1170, 1171, 18, 17, 18, 1169, 1170, 1171, 42, 53, 54, 1196, 1197, 54, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 43, 44, 45, 44, 45, 1536, 297, 114, 115, 116, 42, 120, 118, 117, 118, 117, 118, 64, 65, 72, 72, 72, 72, 72, 1534, 1535, 72, 72, 72, 1537, 1538, 72, 72, 72, 72, 72, 72, 1537, 1538, 72, 72, 1534, 1535, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 1537, 1538, 72, 72, 72, 72, 66, 156, 1202, 1203, 1202, 1203, 1220, 1221, 156, 156, 156, 156, 1220, 1221, 1215, 1216, 1202, 1203, 156, 156, 156, 156, 156, 65, 72, 72, 72, 72, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 64, 156, 156, 67, 38, 38, 38, 38, 38, 38, 42, 45, 44, 45, 44, 45, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 1202, 1203, 156, 156, 156, 67, 258, 1177, 1178, 1179, 40, 39, 40, 1177, 1178, 1179, 42, 64, 156, 1202, 1203, 156, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 38, 38, 38, 38, 38, 23, 31, 114, 115, 116, 42, 23, 24, 25, 24, 25, 24, 64, 72, 72, 72, 72, 72, 72, 1537, 1538, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 1537, 1538, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 66, 156, 156, 1220, 1221, 156, 156, 65, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 64, 156, 156, 67, 38, 38, 38, 38, 38, 38, 56, 57, 57, 57, 57, 57, 57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 67, 258, 1177, 1178, 1179, 18, 17, 18, 1177, 1178, 1179, 42, 64, 1213, 1214, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 38, 38, 38, 38, 38, 120, 119, 114, 115, 116, 42, 120, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 64, 156, 156, 84, 54, 54, 54, 54, 54, 54, 1196, 1197, 54, 54, 54, 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 1202, 1203, 156, 156, 67, 258, 1177, 1178, 1179, 396, 397, 398, 1177, 1178, 1179, 42, 64, 1202, 1203, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 38, 38, 38, 38, 38, 23, 31, 114, 115, 116, 42, 23, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 65, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1213, 1214, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 1213, 1214, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 38, 38, 38, 38, 38, 120, 119, 114, 115, 116, 42, 43, 44, 45, 44, 45, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 44, 45, 44, 45, 52, 258, 64, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1202, 1203, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 1202, 1203, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 38, 38, 38, 38, 38, 23, 31, 114, 115, 116, 42, 53, 54, 54, 54, 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 57, 57, 57, 57, 57, 350, 64, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 65, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1213, 1214, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 1213, 1214, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 38, 38, 38, 38, 38, 120, 119, 114, 115, 116, 42, 64, 156, 65, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 54, 54, 54, 54, 1196, 1197, 147, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 926, 156, 1202, 1203, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 1202, 1203, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 17, 18, 20, 23, 31, 114, 115, 116, 42, 64, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 156, 156, 156, 1202, 1203, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 237, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 156, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 20, 326, 79, 79, 80, 120, 119, 114, 115, 116, 42, 64, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 66, 1215, 1216, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 156, 156, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 99, 100, 101, 23, 31, 114, 115, 116, 42, 64, 156, 237, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 1220, 1221, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 237, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 156, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 120, 119, 114, 115, 116, 42, 64, 156, 156, 237, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 926, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 156, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 23, 31, 114, 115, 116, 42, 64, 156, 156, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 1202, 1203, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 156, 1202, 1203, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 1539, 1540, 1540, 1540, 1540, 1541, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 120, 119, 114, 115, 116, 42, 128, 128, 128, 329, 330, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 926, 156, 1202, 1203, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 156, 1215, 1216, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 67, 258, 1177, 1178, 1179, 405, 406, 407, 1177, 1178, 1179, 42, 64, 156, 156, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 1539, 1540, 1540, 1540, 1540, 1541, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 23, 31, 114, 115, 116, 56, 57, 57, 57, 22, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 67, 258, 1177, 1178, 1179, 422, 423, 424, 1177, 1178, 1179, 42, 64, 1213, 1214, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 1539, 1540, 1540, 1540, 1540, 1541, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 120, 119, 114, 115, 116, 17, 18, 17, 18, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 926, 156, 1220, 1221, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 892, 893, 893, 894, 156, 156, 156, 1215, 1216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 67, 258, 1177, 1178, 1179, 40, 39, 40, 1177, 1178, 1179, 42, 64, 1202, 1203, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 1542, 1543, 1543, 1543, 1543, 1544, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 23, 31, 114, 115, 116, 39, 40, 39, 40, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 892, 1545, 115, 115, 624, 156, 156, 156, 1220, 1221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 67, 258, 1177, 1178, 1179, 18, 17, 18, 1177, 1178, 1179, 42, 64, 156, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 1546, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 43, 52, 114, 115, 116, 17, 18, 17, 18, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 617, 644, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 1202, 1203, 156, 156, 67, 258, 1177, 1178, 1179, 40, 39, 40, 1177, 1178, 1179, 42, 64, 156, 1202, 1203, 65, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 396, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 398, 40, 1553, 1554, 1555, 1556, 1557, 1558, 20, 20, 18, 396, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 398, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 296, 297, 114, 115, 116, 39, 40, 39, 40, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 618, 618, 644, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1213, 1214, 156, 67, 258, 1177, 1178, 1179, 18, 17, 18, 1177, 1178, 1179, 42, 64, 156, 1213, 1214, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 405, 406, 439, 1559, 1560, 1560, 1560, 1560, 1560, 1561, 1559, 1560, 1560, 1560, 1560, 1560, 1561, 438, 407, 18, 18, 1562, 115, 1563, 20, 17, 40, 40, 17, 1564, 1560, 1560, 1560, 1560, 1561, 1559, 1560, 1560, 1560, 1560, 1560, 1561, 438, 407, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 23, 31, 114, 115, 116, 17, 18, 17, 18, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 156, 892, 893, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 66, 1202, 1203, 156, 67, 258, 1287, 1288, 1289, 346, 39, 40, 1287, 1288, 1289, 42, 64, 156, 1202, 1203, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 405, 406, 407, 1565, 1566, 1566, 1566, 1566, 1566, 1567, 1565, 1566, 1566, 1566, 1566, 1566, 1567, 405, 407, 57, 346, 122, 123, 124, 57, 57, 57, 18, 17, 1565, 1566, 1566, 1566, 1566, 1567, 1565, 1566, 1566, 1566, 1566, 1566, 1567, 405, 407, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 120, 119, 114, 115, 116, 39, 40, 39, 40, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 892, 1545, 115, 115, 1568, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 1213, 1214, 67, 258, 326, 79, 79, 80, 17, 326, 79, 79, 80, 42, 64, 1213, 1214, 156, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 405, 406, 407, 1569, 96, 97, 97, 97, 98, 1569, 1569, 99, 100, 100, 100, 101, 1569, 405, 407, 17, 18, 17, 39, 18, 39, 17, 18, 20, 20, 1569, 99, 100, 100, 101, 1569, 1569, 99, 100, 100, 100, 101, 1569, 405, 407, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 23, 31, 114, 115, 116, 17, 18, 17, 18, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 625, 115, 115, 115, 115, 115, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 1202, 1203, 67, 258, 17, 18, 17, 18, 17, 18, 17, 18, 17, 42, 64, 1202, 1203, 156, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 405, 406, 407, 1569, 1261, 1126, 1126, 1126, 1262, 1570, 1569, 122, 123, 123, 123, 124, 1569, 405, 407, 39, 40, 17, 39, 40, 39, 17, 40, 17, 39, 1569, 122, 123, 123, 124, 1569, 1569, 122, 123, 123, 123, 124, 1569, 405, 407, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 120, 119, 114, 115, 116, 39, 40, 21, 40, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 625, 115, 115, 115, 115, 115, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 156, 1213, 1571, 258, 21, 20, 40, 39, 40, 39, 40, 20, 21, 42, 1238, 1214, 156, 156, 237, 72, 72, 72, 72, 72, 72, 72, 156, 67, 258, 19, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 405, 406, 407, 1570, 1572, 1572, 1572, 1572, 1572, 1573, 1570, 1546, 1546, 1546, 1546, 1574, 1570, 405, 407, 17, 40, 19, 19, 19, 19, 19, 19, 19, 20, 1570, 1546, 1546, 1546, 1574, 1570, 1570, 1546, 1546, 1546, 1574, 1546, 1570, 405, 407, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 23, 31, 114, 115, 116, 17, 21, 17, 18, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 645, 618, 618, 619, 115, 617, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 156, 1202, 1575, 258, 40, 21, 18, 17, 18, 17, 18, 21, 40, 42, 1239, 1203, 1215, 1216, 156, 72, 72, 72, 72, 72, 72, 926, 156, 67, 258, 19, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 405, 406, 407, 40, 39, 40, 39, 40, 39, 17, 39, 396, 397, 397, 397, 397, 397, 415, 407, 39, 19, 396, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 415, 407, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 120, 119, 114, 115, 116, 39, 40, 21, 40, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 156, 156, 156, 645, 618, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 926, 1215, 1216, 156, 67, 258, 21, 20, 40, 39, 40, 39, 40, 40, 21, 42, 64, 156, 1220, 1221, 156, 237, 72, 72, 72, 72, 926, 156, 156, 67, 258, 19, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 405, 406, 407, 18, 17, 18, 17, 453, 454, 455, 456, 422, 423, 423, 423, 423, 423, 423, 424, 17, 19, 405, 439, 423, 1576, 1577, 1577, 1577, 1577, 1578, 423, 1559, 1560, 1560, 1560, 1560, 1560, 1560, 1560, 1561, 423, 423, 438, 407, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 258, 39, 40, 114, 115, 116, 23, 31, 114, 115, 116, 17, 21, 17, 18, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 1220, 1221, 156, 67, 258, 40, 21, 18, 17, 18, 17, 18, 21, 20, 42, 64, 156, 156, 156, 1215, 1216, 1213, 1214, 156, 156, 1215, 1216, 1213, 1571, 258, 19, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 405, 406, 407, 40, 39, 40, 39, 463, 464, 465, 466, 19, 19, 19, 19, 19, 19, 19, 19, 20, 19, 405, 407, 39, 1539, 1540, 1540, 1540, 1540, 1541, 40, 1565, 1566, 1566, 1566, 1566, 1566, 1566, 1566, 1567, 40, 39, 405, 407, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 258, 17, 18, 114, 115, 116, 120, 119, 114, 115, 116, 39, 40, 21, 40, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 926, 1213, 1214, 156, 156, 67, 258, 21, 40, 40, 39, 40, 39, 40, 39, 21, 42, 64, 156, 156, 156, 1220, 1221, 1202, 1203, 1213, 1214, 1220, 1221, 1202, 1575, 258, 19, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 405, 406, 407, 18, 17, 18, 17, 473, 474, 475, 476, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 405, 407, 17, 1539, 1540, 1540, 1540, 1540, 1541, 18, 1569, 99, 100, 100, 100, 100, 100, 101, 1569, 18, 17, 405, 407, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 117, 118, 45, 44, 45, 44, 350, 20, 20, 114, 115, 116, 23, 31, 114, 115, 116, 17, 21, 17, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 67, 258, 40, 21, 18, 17, 18, 17, 18, 21, 18, 42, 64, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 67, 258, 19, 43, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 405, 406, 522, 397, 397, 397, 398, 490, 491, 333, 492, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 405, 407, 298, 1579, 1580, 1581, 1580, 1580, 1582, 40, 1569, 122, 123, 123, 123, 123, 123, 124, 1569, 40, 39, 405, 407, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 298, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 25, 31, 99, 100, 100, 100, 100, 100, 100, 367, 115, 116, 43, 52, 114, 115, 116, 39, 40, 21, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1215, 1216, 156, 156, 156, 67, 258, 21, 18, 40, 39, 40, 39, 40, 17, 21, 136, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 258, 19, 19, 19, 19, 19, 19, 19, 19, 19, 621, 622, 622, 622, 622, 623, 19, 19, 19, 19, 19, 298, 19, 19, 19, 19, 19, 19, 19, 19, 422, 423, 423, 423, 423, 438, 522, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 415, 407, 258, 1583, 1584, 1585, 1584, 1584, 1586, 18, 1570, 1546, 1546, 1546, 1546, 1574, 1546, 1546, 1570, 18, 17, 405, 407, 23, 24, 25, 24, 25, 24, 25, 24, 45, 44, 45, 44, 45, 44, 45, 44, 45, 52, 258, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 45, 44, 114, 115, 115, 115, 115, 115, 115, 115, 115, 116, 17, 18, 114, 115, 116, 17, 18, 17, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1220, 1221, 156, 156, 156, 67, 258, 40, 99, 100, 100, 100, 100, 100, 101, 40, 39, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 477, 57, 57, 57, 57, 346, 57, 57, 57, 1053, 626, 627, 627, 627, 627, 628, 1054, 18, 17, 18, 346, 477, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 1587, 1559, 1560, 1560, 1560, 1560, 1560, 1560, 1560, 1561, 423, 423, 423, 423, 423, 423, 423, 424, 258, 20, 114, 115, 116, 40, 20, 40, 396, 397, 397, 397, 397, 397, 397, 397, 397, 397, 397, 415, 407, 120, 118, 117, 118, 117, 118, 117, 119, 20, 20, 20, 20, 20, 17, 18, 17, 18, 17, 258, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 18, 20, 122, 123, 123, 123, 123, 123, 123, 123, 123, 124, 39, 40, 114, 115, 116, 39, 40, 39, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 67, 258, 99, 367, 115, 115, 115, 115, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1002, 650, 651, 651, 651, 651, 652, 1003, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 42, 1565, 1566, 1566, 1566, 1566, 1566, 1566, 1566, 1567, 1588, 17, 39, 40, 39, 40, 39, 40, 258, 346, 114, 115, 116, 57, 346, 18, 422, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 424, 23, 24, 25, 24, 25, 24, 25, 31, 57, 57, 57, 57, 621, 622, 622, 622, 622, 623, 350, 39, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 40, 958, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 114, 115, 116, 17, 18, 17, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 67, 258, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1023, 653, 654, 654, 654, 654, 655, 1024, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 42, 1569, 96, 97, 97, 97, 97, 97, 98, 1569, 18, 21, 39, 40, 39, 40, 39, 40, 258, 17, 114, 115, 116, 17, 17, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 43, 44, 45, 44, 45, 44, 45, 52, 20, 20, 20, 1053, 626, 627, 627, 627, 627, 628, 1054, 326, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 338, 39, 40, 21, 40, 21, 40, 21, 40, 21, 40, 39, 40, 114, 115, 116, 39, 40, 39, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 892, 893, 894, 156, 156, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 156, 67, 477, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 259, 123, 123, 123, 123, 1034, 633, 635, 635, 635, 635, 636, 1035, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 260, 115, 116, 42, 1569, 111, 112, 112, 112, 112, 112, 113, 1569, 21, 39, 21, 17, 21, 17, 18, 18, 258, 39, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1002, 650, 651, 651, 651, 651, 652, 1003, 100, 100, 101, 38, 38, 38, 38, 38, 38, 21, 20, 21, 20, 21, 20, 38, 38, 38, 38, 38, 38, 17, 18, 17, 20, 17, 18, 17, 18, 17, 21, 20, 21, 20, 38, 38, 38, 38, 21, 20, 21, 20, 38, 38, 38, 38, 38, 38, 38, 21, 20, 21, 20, 17, 18, 39, 20, 17, 18, 17, 21, 17, 21, 17, 21, 17, 18, 17, 18, 114, 115, 116, 17, 18, 17, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 892, 1545, 115, 1568, 894, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1220, 1221, 156, 156, 84, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 165, 403, 437, 437, 437, 437, 437, 437, 437, 437, 437, 18, 17, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 416, 417, 40, 39, 114, 115, 116, 42, 1570, 1261, 1126, 1126, 1126, 1126, 1126, 1262, 1570, 18, 21, 18, 21, 40, 21, 40, 40, 258, 17, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1023, 653, 654, 654, 654, 654, 655, 1024, 115, 115, 116, 38, 38, 38, 38, 38, 38, 17, 21, 17, 21, 17, 21, 38, 38, 38, 38, 38, 38, 39, 40, 39, 346, 39, 40, 39, 40, 39, 17, 21, 17, 21, 38, 38, 38, 38, 17, 21, 17, 21, 38, 38, 38, 38, 38, 38, 38, 17, 21, 17, 21, 39, 40, 17, 39, 20, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 114, 115, 116, 39, 40, 39, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 115, 624, 156, 1215, 1216, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 67, 414, 17, 18, 17, 18, 17, 18, 17, 17, 17, 17, 18, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 18, 17, 114, 115, 116, 56, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 57, 57, 57, 57, 57, 57, 20, 350, 39, 114, 115, 259, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 1034, 633, 635, 635, 635, 635, 636, 1035, 260, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 116, 17, 18, 17, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 617, 644, 156, 1220, 1221, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 67, 414, 39, 38, 38, 38, 38, 38, 38, 18, 18, 296, 297, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 40, 39, 114, 115, 354, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 367, 115, 116, 17, 211, 57, 110, 110, 110, 110, 110, 110, 110, 110, 110, 379, 17, 18, 40, 296, 297, 416, 417, 416, 417, 416, 417, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 379, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 39, 39, 41, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 618, 618, 644, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 1215, 1216, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 67, 414, 17, 38, 38, 38, 38, 38, 38, 17, 533, 23, 31, 23, 31, 23, 31, 23, 24, 25, 24, 25, 24, 25, 31, 18, 17, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 39, 42, 21, 18, 39, 96, 97, 97, 97, 97, 97, 98, 1589, 39, 40, 18, 23, 31, 23, 31, 23, 31, 23, 31, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 258, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 17, 18, 17, 20, 42, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 66, 156, 1220, 1221, 1213, 1214, 156, 156, 156, 1220, 1221, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1213, 1214, 156, 156, 1213, 1214, 1215, 1216, 156, 156, 1213, 1571, 414, 39, 38, 38, 38, 38, 38, 38, 18, 546, 120, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 17, 18, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 17, 42, 39, 21, 20, 111, 112, 112, 112, 112, 112, 113, 1589, 17, 18, 19, 120, 118, 117, 118, 117, 118, 117, 118, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 477, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 136, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 926, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 156, 156, 1202, 1203, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 156, 156, 1215, 1216, 1213, 1214, 1213, 1214, 1220, 1221, 1202, 1203, 1215, 1216, 1202, 1203, 1220, 1221, 1215, 1216, 1202, 1575, 414, 17, 38, 38, 38, 38, 38, 38, 17, 546, 23, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 17, 18, 125, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 126, 127, 17, 39, 42, 21, 18, 17, 128, 128, 128, 128, 128, 128, 128, 1589, 39, 40, 19, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 66, 156, 156, 156, 156, 1202, 1203, 1220, 1221, 1213, 1214, 1213, 1214, 1215, 1216, 1220, 1221, 1202, 1203, 1202, 1203, 156, 156, 156, 156, 1220, 1221, 156, 156, 156, 156, 1220, 1221, 156, 67, 414, 39, 18, 17, 18, 17, 18, 17, 18, 546, 43, 44, 45, 44, 45, 44, 117, 118, 117, 118, 117, 118, 117, 119, 39, 40, 132, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 948, 949, 950, 1590, 1591, 105, 39, 17, 42, 17, 17, 17, 20, 17, 18, 99, 100, 101, 20, 258, 17, 18, 19, 120, 118, 117, 118, 117, 118, 117, 118, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 66, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 1220, 1221, 156, 156, 156, 65, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 66, 156, 1213, 1214, 67, 436, 437, 437, 437, 437, 437, 437, 437, 437, 647, 53, 54, 54, 54, 54, 165, 23, 24, 25, 24, 25, 24, 25, 31, 17, 18, 132, 1, 1592, 1593, 1593, 1593, 1593, 1593, 1594, 1595, 1596, 1596, 1596, 1597, 1595, 1596, 1596, 1596, 1597, 300, 301, 302, 303, 304, 105, 17, 39, 42, 1598, 1599, 1600, 1599, 1601, 1602, 1603, 1604, 1605, 1606, 258, 39, 40, 19, 23, 24, 25, 24, 25, 24, 25, 24, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 119, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 66, 1202, 1203, 84, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 65, 72, 72, 66, 84, 120, 118, 117, 118, 117, 118, 117, 119, 39, 40, 32, 7, 355, 356, 356, 356, 356, 356, 357, 1607, 1608, 1608, 1608, 1609, 1607, 1608, 1608, 1608, 1609, 308, 309, 310, 311, 312, 16, 39, 17, 56, 1607, 1608, 1608, 1608, 1609, 1607, 1608, 1608, 1608, 1609, 350, 17, 18, 19, 120, 118, 117, 118, 117, 118, 117, 118, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 24, 25, 31, 64, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 1610, 20, 360, 361, 361, 361, 361, 361, 362, 1611, 1612, 1613, 1614, 1615, 1611, 1612, 1613, 1614, 1615, 317, 318, 319, 320, 321, 958, 17, 39, 1616, 1611, 1612, 1613, 1614, 1615, 1611, 1612, 1613, 1614, 1615, 39, 39, 40, 19, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 37, 368, 369, 370, 371, 372, 373, 374, 375, 1617, 1585, 1618, 1619, 1620, 1617, 1585, 1618, 1619, 1620, 331, 332, 333, 334, 335, 305, 39, 17, 58, 1617, 1585, 1618, 1619, 1620, 1617, 1585, 1618, 1619, 1620, 40, 39, 40, 19, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 37, 388, 389, 390, 391, 162, 392, 393, 394, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 305, 17, 39, 39, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 18, 17, 18, 19, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 1202, 1203, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 37, 99, 100, 100, 100, 100, 100, 100, 100, 367, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 305, 39, 40, 57, 57, 57, 57, 57, 20, 20, 20, 57, 57, 57, 57, 17, 18, 19, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1202, 1203, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 37, 122, 123, 123, 123, 260, 115, 259, 123, 123, 123, 123, 123, 123, 123, 260, 115, 259, 123, 123, 123, 123, 123, 124, 305, 39, 18, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 17, 19, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 1215, 1216, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 39, 40, 78, 79, 79, 79, 80, 114, 115, 116, 125, 126, 126, 126, 126, 126, 127, 114, 115, 116, 326, 79, 79, 79, 79, 79, 338, 298, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 39, 19, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 17, 18, 39, 40, 39, 40, 39, 122, 123, 124, 132, 133, 134, 134, 134, 135, 105, 122, 123, 124, 18, 17, 18, 17, 18, 17, 18, 477, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 19, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1213, 1214, 156, 156, 156, 892, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 119, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 132, 33, 1, 1, 1, 15, 105, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 125, 126, 126, 126, 126, 126, 127, 296, 297, 296, 297, 296, 297, 296, 297, 296, 297, 120, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 1202, 1203, 156, 156, 156, 625, 115, 1568, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 132, 33, 1, 1, 1, 15, 105, 17, 18, 17, 18, 17, 18, 17, 18, 17, 18, 132, 133, 134, 134, 134, 135, 105, 23, 31, 23, 31, 23, 31, 23, 31, 23, 31, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 926, 156, 156, 1215, 1216, 156, 645, 619, 115, 115, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 132, 33, 1, 1, 1, 15, 105, 39, 40, 39, 40, 39, 40, 39, 40, 39, 40, 132, 33, 1, 1, 1, 15, 105, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 117, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 1220, 1221, 156, 156, 645, 618, 618, 644, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 33, 1, 1, 1, 15, 358, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 1621, 33, 1, 1, 1, 15, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 33, 1, 1, 1, 15, 358, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1621, 33, 1, 1, 1, 15, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 33, 1, 1, 1, 15, 358, 115, 115, 115, 115, 115, 115, 115, 1622, 115, 115, 1621, 33, 1, 1, 1, 15, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1220, 1221, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 892, 893, 893, 893, 894, 156, 1220, 1221, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 33, 1, 1, 1, 15, 73, 377, 377, 377, 377, 377, 377, 1623, 1622, 115, 115, 1621, 33, 1, 1, 1, 15, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 892, 1545, 115, 115, 115, 624, 156, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 33, 1, 1, 1, 15, 358, 115, 115, 115, 115, 115, 115, 115, 1622, 115, 115, 1621, 6, 4, 1, 1, 15, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 115, 617, 644, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 33, 1, 1, 1, 15, 73, 377, 377, 377, 377, 377, 377, 1623, 1622, 115, 115, 1621, 1, 33, 1, 1, 15, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 619, 115, 115, 624, 156, 156, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 6, 4, 1, 2, 5, 358, 115, 115, 115, 115, 115, 115, 115, 1622, 115, 115, 1621, 1, 33, 1, 2, 5, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 618, 618, 644, 156, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 1, 6, 3, 5, 1, 73, 377, 377, 377, 377, 377, 377, 1623, 1622, 115, 115, 1621, 1, 6, 3, 5, 1, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 3, 3, 3, 3, 3, 1624, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 306, 3, 3, 3, 3, 3, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 54, 54, 54, 54, 1196, 1197, 55, 115, 115, 115, 115, 115, 115, 115, 115, 238, 1196, 1197, 54, 54, 54, 54, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 156, 156, 156, 1202, 1203, 67, 115, 115, 115, 115, 115, 115, 115, 115, 64, 1202, 1203, 156, 156, 65, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1220, 1221, 156, 156, 892, 893, 893, 893, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 66, 156, 1215, 1216, 67, 115, 115, 115, 115, 115, 115, 115, 115, 64, 1215, 1216, 156, 65, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 625, 115, 115, 115, 115, 1568, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 156, 1220, 1221, 84, 55, 115, 115, 115, 115, 346, 115, 115, 64, 1220, 1221, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 926, 1202, 1203, 156, 156, 645, 619, 115, 115, 115, 115, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 156, 1213, 1214, 156, 84, 54, 55, 115, 115, 115, 115, 115, 64, 1213, 1214, 156, 237, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 156, 1213, 1214, 156, 156, 645, 619, 115, 115, 115, 624, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 926, 156, 1202, 1203, 156, 156, 156, 84, 54, 54, 54, 54, 54, 147, 1202, 1203, 1215, 1216, 156, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1215, 1216, 1202, 1203, 156, 156, 156, 645, 618, 618, 618, 644, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1220, 1221, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 237, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 926, 1202, 1203, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 1202, 1203, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 926, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 1220, 1221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 1220, 1221, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 1213, 1214, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1215, 1216, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 926, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 156, 156, 892, 893, 893, 894, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 1215, 1216, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 1215, 1216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 892, 893, 1545, 115, 115, 624, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 1220, 1221, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 1220, 1221, 156, 1220, 1221, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 625, 115, 115, 115, 617, 644, 156, 156, 156, 156, 1202, 1203, 156, 156, 1213, 1214, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1202, 1203, 156, 156, 156, 645, 618, 618, 618, 644, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1202, 1203, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 65, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 65, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1220, 1221, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 156, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 1213, 1214, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 156, 65, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 926, 1202, 1203, 1215, 1216, 156, 1202, 1203, 156, 156, 156, 256, 1625, 1626, 330, 156, 1213, 1214, 156, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 1220, 1221, 156, 156, 156, 156, 156, 156, 67, 35, 35, 64, 156, 1202, 1203, 156, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1215, 1216, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 1215, 1216, 156, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 67, 35, 35, 64, 156, 156, 1213, 1214, 156, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1220, 1221, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 256, 1625, 1627, 1627, 1627, 1627, 1627, 1627, 35, 35, 64, 156, 156, 1202, 1203, 156, 237, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 1215, 1216, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 67, 1628, 1629, 1629, 1629, 1629, 1629, 1630, 35, 94, 64, 156, 156, 1213, 1214, 156, 156, 237, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 1220, 1221, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 67, 1631, 1632, 1633, 1632, 1633, 1632, 1634, 35, 91, 128, 329, 330, 1635, 1636, 1637, 1637, 1637, 1638, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 926, 156, 156, 156, 1213, 1214, 156, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 926, 156, 156, 1215, 1216, 1215, 1216, 156, 156, 156, 237, 72, 72, 72, 72, 72, 72, 926, 156, 1639, 594, 594, 594, 1240, 156, 1215, 1216, 156, 156, 156, 156, 1215, 1216, 1215, 1216, 156, 156, 156, 156, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 926, 156, 156, 156, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 926, 1213, 1214, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 67, 1640, 1641, 1642, 1641, 1642, 1641, 1643, 94, 95, 18, 40, 128, 355, 356, 356, 356, 356, 357, 330, 156, 72, 72, 72, 72, 72, 72, 72, 72, 926, 156, 156, 1213, 1214, 156, 156, 156, 156, 1213, 1214, 1213, 1214, 1202, 1203, 1213, 1214, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 1213, 1214, 1220, 1221, 1220, 1221, 1213, 1214, 1213, 1214, 156, 156, 237, 72, 72, 926, 156, 1639, 155, 133, 134, 135, 146, 1240, 1220, 1221, 1213, 1214, 1213, 1214, 1220, 1221, 1220, 1221, 1213, 1214, 1213, 1214, 156, 156, 237, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 926, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 237, 72, 72, 72, 72, 72, 72, 72, 926, 156, 156, 1215, 1216, 1213, 1214, 1213, 1214, 1202, 1203, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1215, 1216, 156, 156, 67, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 95, 17, 18, 18, 18, 360, 361, 361, 361, 361, 362, 64, 156, 237, 72, 72, 72, 72, 72, 926, 156, 156, 1213, 1214, 1202, 1203, 1213, 1214, 1215, 1216, 1202, 1203, 1202, 1203, 156, 156, 1202, 1203, 1213, 1214, 1215, 1216, 1213, 1214, 1220, 1221, 1215, 1216, 1215, 1216, 1213, 1214, 1202, 1203, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 1213, 1214, 156, 156, 156, 156, 1639, 155, 133, 155, 1, 146, 135, 146, 1240, 156, 1202, 1203, 1202, 1203, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 1215, 1216, 1213, 1214, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 1215, 1216, 1213, 1214, 1202, 1203, 1213, 1214, 156, 156, 156, 156, 1213, 1214, 1213, 1214, 156, 156, 156, 156, 1215, 1216, 1220, 1221, 1202, 1203, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1220, 1221, 156, 156, 67, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 346, 40, 39, 40, 39, 369, 370, 371, 372, 373, 375, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 1202, 1203, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 1220, 1221, 1202, 1203, 156, 156, 1220, 1221, 1220, 1221, 1202, 1203, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 1202, 1203, 1213, 1214, 156, 1639, 33, 1, 33, 1, 1, 1, 15, 1, 15, 1240, 156, 256, 1378, 1378, 1378, 1378, 1378, 1378, 1378, 1378, 330, 156, 1220, 1221, 1202, 1203, 1215, 1216, 1202, 1203, 1213, 1214, 1213, 1214, 1215, 1216, 1220, 1221, 1202, 1203, 156, 156, 1202, 1203, 1215, 1216, 1215, 1216, 1202, 1203, 1202, 1203, 1213, 1214, 1213, 1214, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 67, 35, 91, 1658, 1659, 1660, 40, 40, 17, 18, 18, 18, 18, 389, 390, 391, 162, 392, 1661, 64, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 892, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 1213, 1214, 156, 156, 1202, 1203, 256, 1621, 33, 1, 6, 4, 1, 2, 5, 1, 15, 15, 1378, 1378, 115, 115, 115, 115, 115, 115, 115, 115, 1378, 330, 156, 156, 156, 156, 1220, 1221, 156, 156, 1202, 1203, 1202, 1203, 1220, 1221, 156, 156, 156, 156, 1213, 1214, 156, 156, 1220, 1221, 1220, 1221, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1202, 1203, 156, 67, 35, 91, 40, 17, 40, 17, 40, 17, 336, 86, 86, 86, 86, 86, 87, 18, 17, 388, 1238, 1214, 1202, 1203, 1213, 1214, 1215, 1216, 1213, 1214, 1220, 1221, 156, 1215, 1216, 156, 156, 156, 156, 1220, 1221, 156, 892, 1545, 115, 1568, 893, 894, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 1215, 1216, 1213, 1571, 1621, 6, 4, 1, 6, 3, 5, 1, 2, 5, 358, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1378, 330, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 67, 1662, 1663, 1664, 1665, 1666, 1664, 1667, 39, 516, 92, 92, 92, 92, 92, 95, 40, 39, 40, 1239, 1203, 156, 156, 1202, 1203, 1220, 1221, 1202, 1203, 156, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 115, 115, 1568, 894, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 1202, 1575, 306, 4, 6, 4, 1, 1, 1, 2, 5, 2, 1624, 115, 115, 115, 115, 1668, 1669, 1669, 1669, 1670, 115, 115, 115, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 67, 1671, 1672, 1673, 1674, 1672, 1673, 1675, 339, 340, 341, 342, 343, 17, 18, 17, 18, 17, 18, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 115, 115, 617, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 892, 893, 893, 893, 894, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 67, 115, 306, 4, 6, 3, 3, 3, 5, 2, 1624, 115, 115, 115, 115, 1668, 155, 133, 134, 135, 146, 1670, 115, 115, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1213, 1214, 156, 156, 67, 1676, 1677, 1678, 1679, 1677, 1678, 1680, 300, 301, 302, 303, 304, 453, 454, 455, 456, 336, 86, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 618, 618, 618, 618, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 115, 1568, 894, 156, 156, 156, 156, 1202, 1203, 156, 1213, 1571, 115, 115, 306, 7, 7, 307, 7, 7, 1624, 346, 115, 115, 115, 1668, 155, 133, 155, 1, 146, 135, 146, 1670, 115, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1202, 1203, 156, 156, 67, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 308, 309, 310, 311, 312, 463, 464, 465, 466, 106, 35, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 115, 115, 115, 115, 624, 156, 156, 156, 156, 1213, 1214, 156, 1202, 1575, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1668, 33, 1, 33, 1, 1, 1, 15, 1, 15, 1670, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1215, 1216, 156, 156, 67, 35, 91, 17, 18, 1688, 1689, 17, 317, 318, 319, 320, 321, 473, 474, 475, 476, 106, 35, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 618, 619, 115, 115, 624, 156, 156, 156, 156, 1202, 1203, 156, 156, 84, 55, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 1621, 33, 1, 6, 4, 1, 2, 5, 1, 15, 15, 1238, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1220, 1221, 156, 156, 67, 35, 85, 86, 86, 86, 86, 87, 331, 332, 333, 334, 335, 490, 491, 333, 492, 106, 35, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 618, 618, 644, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 67, 115, 115, 115, 115, 115, 115, 115, 238, 54, 54, 55, 1621, 6, 4, 1, 6, 3, 5, 1, 2, 5, 15, 1239, 1203, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 1202, 1203, 156, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1215, 1216, 156, 84, 54, 54, 55, 35, 35, 35, 91, 39, 40, 39, 40, 39, 39, 40, 39, 40, 106, 35, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 892, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 84, 54, 54, 54, 54, 54, 54, 54, 147, 156, 1213, 1571, 306, 4, 6, 4, 1, 1, 1, 2, 5, 2, 5, 64, 1213, 1214, 156, 1202, 1203, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 1213, 1214, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1220, 1221, 156, 156, 156, 156, 67, 35, 35, 35, 85, 86, 86, 86, 86, 86, 86, 86, 86, 86, 345, 35, 64, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 892, 893, 894, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 625, 617, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 1202, 1575, 115, 306, 4, 6, 3, 3, 3, 5, 2, 5, 238, 147, 1202, 1203, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 1213, 1214, 156, 156, 156, 156, 67, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 64, 156, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 892, 1545, 115, 624, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 645, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 1213, 1214, 1213, 1214, 1215, 1216, 1215, 1216, 1202, 1203, 156, 84, 55, 346, 306, 7, 7, 307, 7, 7, 5, 238, 147, 156, 156, 1215, 1216, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 1213, 1214, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 1202, 1203, 156, 156, 156, 156, 84, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 147, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 645, 618, 618, 644, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 1220, 1221, 1220, 1221, 156, 156, 156, 156, 67, 115, 115, 115, 115, 115, 115, 115, 238, 147, 156, 156, 156, 1220, 1221, 1215, 1216, 1202, 1203, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1215, 1216, 156, 156, 156, 1202, 1203, 156, 156, 1213, 1214, 1202, 1203, 156, 156, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 84, 54, 54, 55, 115, 115, 115, 115, 64, 156, 156, 156, 156, 1215, 1216, 1220, 1221, 156, 156, 1215, 1216, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 1215, 1216, 1213, 1214, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 1220, 1221, 156, 156, 156, 156, 156, 156, 156, 1202, 1203, 156, 156, 65, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 156, 1220, 1221, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 156, 156, 1215, 1216, 1215, 1216, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 1213, 1214, 1202, 1203, 1220, 1221, 1213, 1214, 156, 156, 1213, 1214, 1213, 1214, 1215, 1216, 156, 156, 156, 156, 1213, 1214, 1202, 1203, 1215, 1216, 156, 156, 156, 156, 1215, 1216, 1202, 1203, 1213, 1214, 156, 156, 1215, 1216, 1213, 1214, 156, 156, 1213, 1214, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 84, 54, 54, 54, 54, 147, 156, 156, 1215, 1216, 1220, 1221, 156, 156, 156, 156, 1220, 1221, 156, 156, 156, 156, 1215, 1216, 1215, 1216, 156, 156, 156, 156, 1213, 1214, 1220, 1221, 1202, 1203, 1213, 1214, 1213, 1214, 156, 156, 156, 156, 1213, 1214, 1213, 1214, 156, 156, 156, 156, 1213, 1214, 1215, 1216, 1213, 1214, 156, 156, 1213, 1214, 1215, 1216, 156, 156, 1213, 1214, 156, 156, 156, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 66, 156, 156, 1202, 1203, 1220, 1221, 1213, 1214, 1213, 1214, 1215, 1216, 1220, 1221, 1220, 1221, 1202, 1203, 1215, 1216, 1213, 1214, 1215, 1216, 1213, 1214, 1202, 1203, 156, 156, 156, 156, 1202, 1203, 1215, 1216, 1202, 1203, 1202, 1203, 1220, 1221, 1213, 1214, 1213, 1214, 1202, 1203, 156, 156, 1220, 1221, 1213, 1214, 1215, 1216, 1220, 1221, 156, 156, 1202, 1203, 1215, 1216, 1220, 1221, 1202, 1203, 1215, 1216, 1202, 1203, 1213, 1214, 1213, 1214, 1215, 1216, 1215, 1216, 1213, 1214, 1213, 1214, 1213, 1214, 1215, 1216, 1215, 1216, 1215, 1216, 1213, 1214, 1213, 1214, 1213, 1214, 1215, 1216, 1220, 1221, 156, 156, 65, 72, 72, 66, 156, 156, 1213, 1214, 1213, 1214, 1220, 1221, 1220, 1221, 1215, 1216, 1213, 1214, 1202, 1203, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 1215, 1216, 1213, 1214, 1202, 1203, 1202, 1203, 1213, 1214, 1213, 1214, 1202, 1203, 1220, 1221, 1202, 1203, 1213, 1214, 1202, 1203, 1220, 1221, 1213, 1214, 1202, 1203, 156, 65, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 72, 72, 72, 72, 66, 156, 156, 1202, 1203, 1202, 1203, 1220, 1221, 156, 65, 72, 72, 66, 156, 1220, 1221, 1202, 1203, 1220, 1221, 1202, 1203, 156, 156, 65, 72, 72, 72, 66, 156, 1220, 1221, 156, 65, 72, 72, 66, 156, 1202, 1203, 1202, 1203, 156, 156, 65, 72, 66, 156, 1202, 1203, 1220, 1221, 156, 65, 72, 66, 156, 156, 1220, 1221, 156, 156, 156, 156, 1220, 1221, 156, 156, 1202, 1203, 1202, 1203, 1220, 1221, 1220, 1221, 1202, 1203, 1202, 1203, 1202, 1203, 1220, 1221, 1220, 1221, 1220, 1221, 1202, 1203, 1202, 1203, 1202, 1203, 1220, 1221, 156, 156, 65, 72, 72, 72, 72, 72, 66, 66, 1202, 1203, 1202, 1203, 156, 156, 156, 156, 1220, 1221, 1202, 1203, 156, 156, 65, 72, 72, 72, 72, 66, 156, 156, 1220, 1221, 1202, 1203, 156, 156, 156, 156, 1202, 1203, 1202, 1203, 156, 65, 72, 72, 66, 156, 1202, 1203, 156, 156, 156, 156, 1202, 1203, 156, 65, 72, 72, 72, 72, 72, 72, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
            class K extends Phaser.GameObjects.Container {
                constructor(e) {
                    super(e, 1e4, 0),
                    this.scene = e,
                    this.scene.add.existing(this),
                    this.tileSize = 64,
                    this.tileWidth = 1920 / this.tileSize + 1,
                    this.tileHeight = 1080 / this.tileSize + 1,
                    this.grid = [];
                    for (let t = 0; t < this.tileHeight; t++) {
                        this.grid[t] = [];
                        for (let i = 0; i < this.tileWidth; i++) {
                            let s = e.add.image(0, 0, "tileset", Z[t][i]);
                            s.setOrigin(0),
                            this.add(s),
                            this.grid[t][i] = s
                        }
                    }
                    this.cx = 0,
                    this.cy = 0,
                    e.input.keyboard && (this.keys = e.input.keyboard.addKeys("W,S,A,D"))
                }
                onScreenResize(e, t) {
                    this.tileSize = 64
                }
                update(e, t) {
                    this.keys.A.isDown && (this.cx -= 50),
                    this.keys.D.isDown && (this.cx += 50),
                    this.keys.W.isDown && (this.cy -= 50),
                    this.keys.S.isDown && (this.cy += 50);
                    for (let e = 0; e < this.tileHeight; e++)
                        for (let t = 0; t < this.tileWidth; t++) {
                            let i = (t - 1) * this.tileSize + (-this.cx % this.tileSize + this.tileSize) % this.tileSize
                              , s = (e - 1) * this.tileSize + (-this.cy % this.tileSize + this.tileSize) % this.tileSize
                              , a = t - 1 + Math.ceil(this.cx / this.tileSize)
                              , r = e - 1 + Math.ceil(this.cy / this.tileSize);
                            if (a >= 0 && r >= 0 && r < Z.length && a < Z[r].length) {
                                let h = Z[r][a];
                                this.grid[e][t].x = i,
                                this.grid[e][t].y = s,
                                this.grid[e][t].setFrame(h),
                                this.grid[e][t].setVisible(!0)
                            } else
                                this.grid[e][t] && this.grid[e][t].setVisible(!1)
                        }
                }
            }
            class j extends Phaser.GameObjects.Container {
                constructor(e, t, i) {
                    super(e, t, i),
                    this.scene = e,
                    this.hover = !1,
                    this._hold = !1,
                    this.liftSmooth = 0,
                    this.holdSmooth = 0
                }
                makeInteractive(e) {
                    e.removeInteractive(),
                    e.setInteractive({
                        useHandCursor: !0
                    }).on("pointerout", this.onOut, this).on("pointerover", this.onOver, this).on("pointerdown", this.onDown, this).on("pointerup", this.onUp, this)
                }
                get hold() {
                    return this._hold
                }
                set hold(e) {
                    e != this._hold && (this.tween && this.tween.stop(),
                    this.tween = e ? this.scene.tweens.add({
                        targets: this,
                        holdSmooth: {
                            from: 0,
                            to: 1
                        },
                        ease: "Cubic.Out",
                        duration: 100
                    }) : this.scene.tweens.add({
                        targets: this,
                        holdSmooth: {
                            from: 1,
                            to: 0
                        },
                        ease: e => Phaser.Math.Easing.Elastic.Out(e, 1.5, .5),
                        duration: 500
                    })),
                    this._hold = e
                }
                onOut(e, t) {
                    this.hover = !1,
                    this.hold = !1
                }
                onOver(e, t, i, s) {
                    this.hover = !0
                }
                onDown(e, t, i, s) {
                    this.hold = !0
                }
                onUp(e, t, i, s) {
                    this.hold && (this.hold = !1,
                    this.emit("click"))
                }
                update(e, t) {}
            }
            class Y extends j {
                constructor(e, t, i, s, a) {
                    super(e, t, i),
                    this.scene = e,
                    this.bg = new V(e,0,0,s,a,a / 2,E),
                    this.add(this.bg),
                    this.makeInteractive(this.bg),
                    this.fg = new V(e,0,0,s,a,a / 2,F),
                    this.add(this.fg),
                    this.makeInteractive(this.fg),
                    this.levelText = e.createText(0, 0, .85 * a, e.weights.bold, "#000", "Level:"),
                    this.levelText.setOrigin(0, .5),
                    this.add(this.levelText),
                    this.xpText = e.createText(0, 0, .85 * a, e.weights.bold, "#000", "0/8"),
                    this.xpText.setOrigin(.5),
                    this.xpText.setStroke("#FFF", 5),
                    this.add(this.xpText),
                    this.makeInteractive(this.bg)
                }
                update(e, t) {
                    this.setScale(1 - .1 * this.holdSmooth),
                    this.setAlpha(this.enabled ? 1 : .25)
                }
                resize(e, t, i) {
                    this.bg.setRadius(t / 2),
                    this.bg.setWidth(e),
                    this.bg.setHeight(t);
                    let s = this.bg.width * this.barRatio;
                    this.fg.setRadius(t / 2),
                    this.fg.setWidth(s),
                    this.fg.setHeight(t),
                    this.fg.x = -this.bg.width / 2 + s / 2,
                    this.levelText.x = -.48 * e,
                    this.levelText.setFontSize(2.5 * i),
                    this.xpText.setFontSize(2.5 * i),
                    this.xpText.setStroke("#FFF", i / 2)
                }
                get enabled() {
                    return this.bg.input.enabled
                }
                set enabled(e) {
                    this.bg.input.enabled = e
                }
                set color(e) {
                    this.bg.setColor(e)
                }
                set textColor(e) {
                    this.xpText.setColor(L(e))
                }
                setText(e, t, i) {
                    this.barRatio = t / i;
                    let s = this.bg.width * this.barRatio;
                    this.fg.x = -this.bg.width / 2 + s / 2,
                    this.fg.setWidth(s),
                    this.fg.setVisible(s > 0),
                    this.levelText.setText(`Level: ${e}`),
                    this.xpText.setText(`${t}/${i}`)
                }
            }
            class $ extends Phaser.GameObjects.Container {
                constructor(e) {
                    super(e, 0, 0),
                    this.scene = e,
                    e.add.existing(this),
                    this.background = new V(this.scene,0,0,100,100,25,R),
                    this.background.setVisible(!1),
                    this.add(this.background),
                    this.experienceBar = new Y(this.scene,0,0,100,100),
                    this.add(this.experienceBar),
                    this.settingsButton = new j(this.scene,0,0),
                    this.add(this.settingsButton),
                    this.settingsButtonIcon = this.scene.add.image(0, 0, "settings"),
                    this.settingsButtonIcon.setTint(G),
                    this.settingsButton.add(this.settingsButtonIcon),
                    this.settingsButton.makeInteractive(this.settingsButtonIcon),
                    this.settingsButton.on("click", ( () => {
                        this.emit("settings")
                    }
                    ))
                }
                onScreenResize(e, t) {
                    this.x = e.centerX,
                    this.y = e.centerY,
                    this.width = e.width - 2 * t,
                    this.height = e.height - 2 * t,
                    this.background.setRadius(3 * t),
                    this.background.setWidth(this.width),
                    this.background.setHeight(this.height);
                    const i = this.width / 2
                      , s = 3 * t;
                    this.experienceBar.x = 0,
                    this.experienceBar.y = 0,
                    this.experienceBar.resize(i, s, t);
                    const a = 5 * t;
                    this.settingsButton.x = this.width / 2 - a,
                    this.settingsButton.y = 0,
                    this.settingsButtonIcon.setScale(a / this.settingsButtonIcon.width);
                    const r = this.settingsButtonIcon.width;
                    this.settingsButtonIcon.input.hitArea.setTo(-r / 2, -r / 2, 2 * r, 2 * r)
                }
                update(e, t) {
                    this.experienceBar.update(e, t),
                    this.settingsButton.setScale(1 - .1 * this.settingsButton.holdSmooth)
                }
                updateExperience(e, t, i) {
                    this.experienceBar.setText(e, t, i)
                }
            }
            class U extends Phaser.GameObjects.Container {
                constructor(e, t, i, s, a, r) {
                    super(e, t, i),
                    this.scene = e,
                    this.size = s,
                    this.bg = new V(e,0,0,s,s,a,r),
                    this.add(this.bg),
                    this.image = e.add.image(0, 0, ""),
                    this.add(this.image),
                    this.text = e.createText(.45 * s, .45 * s, .3 * s, e.weights.bold, "#FF4400", "0"),
                    this.text.setOrigin(1),
                    this.text.setAlpha(.75),
                    this.add(this.text)
                }
                resize(e, t) {
                    this.size = e,
                    this.bg.setRadius(e / 6),
                    this.bg.setWidth(e),
                    this.bg.setHeight(e),
                    this.text.x = .45 * e,
                    this.text.y = .45 * e,
                    this.text.setFontSize(.3 * e),
                    this.text.setStroke("#000", .07 * e),
                    this.updateImage()
                }
                setImage(e) {
                    this.itemData = e,
                    this.setVisible(!0),
                    this.updateImage()
                }
                updateImage() {
                    if (this.itemData) {
                        this.image.setTexture(this.itemData.key),
                        this.image.setScale((this.itemData.scale || 1) * this.size / this.image.width);
                        let e = Math.max(this.image.width, this.image.height)
                          , t = 1 - this.image.width / e / 2;
                        this.image.setOrigin(.5, t)
                    }
                }
                setTier(e) {
                    this.text.setText(e.toString())
                }
                setExplored(e) {
                    this.image.setTint(e ? 16777215 : 0),
                    this.image.setAlpha(e ? 1 : .5)
                }
            }
            class J extends j {
                constructor(e, t, i, s, a, r, h) {
                    super(e, t, i),
                    this.scene = e,
                    this.width = s,
                    this.height = a,
                    this.color = h,
                    this.bg = new V(e,0,0,s,a,a / 2,h),
                    this.add(this.bg),
                    this.makeInteractive(this.bg),
                    this.text = e.createText(0, 0, .5 * a, e.weights.bold, "#000", r),
                    this.text.setOrigin(.5),
                    this.add(this.text)
                }
                update(e, t) {
                    this.setScale(1 - .1 * this.holdSmooth),
                    this.setAlpha(this.enabled ? 1 : .25),
                    this.bg.setColor(this.enabled ? this.color : 13216895)
                }
                resize(e, t) {
                    this.width = e,
                    this.height = t,
                    this.bg.setRadius(t / 2),
                    this.bg.setWidth(e),
                    this.bg.setHeight(t);
                    const i = t / 4;
                    this.bg.input.hitArea.setTo(-i, -i, e + 2 * i, t + 2 * i),
                    this.text.setFontSize(.5 * t)
                }
                setText(e) {
                    this.text.setText(e)
                }
                get enabled() {
                    return this.bg.input.enabled
                }
                set enabled(e) {
                    this.bg.input.enabled = e
                }
            }
            class Q extends Phaser.GameObjects.Container {
                constructor(e) {
                    super(e, 0, 0),
                    this.scene = e,
                    e.add.existing(this),
                    this.width = this.scene.W,
                    this.height = .15 * this.scene.H,
                    this.background = new V(this.scene,0,0,100,100,25,R),
                    this.add(this.background),
                    this.itemName = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Name"),
                    this.add(this.itemName),
                    this.itemDesc = this.scene.createText(0, 0, 30, this.scene.weights.regular, "#000", "Desc"),
                    this.add(this.itemDesc),
                    this.emptyText = this.scene.createText(0, 0, 30, this.scene.weights.regular, "#000", "Select an item to see more information!"),
                    this.add(this.emptyText),
                    this.preview_left = new U(this.scene,0,0,100,25,E),
                    this.preview_center = new U(this.scene,0,0,100,25,E),
                    this.preview_right = new U(this.scene,0,0,100,25,E),
                    this.preview_left.setVisible(!1),
                    this.preview_center.setVisible(!1),
                    this.preview_right.setVisible(!1),
                    this.add(this.preview_left),
                    this.add(this.preview_center),
                    this.add(this.preview_right),
                    this.arrow = this.scene.add.image(0, 0, "arrow"),
                    this.arrow.setTint(E),
                    this.add(this.arrow),
                    this.sellButton = new J(this.scene,0,0,100,100,"Trash",15022389),
                    this.add(this.sellButton),
                    this.sellButton.on("click", ( () => {
                        this.emit("sell")
                    }
                    ), this),
                    this.rechargeButton = new J(this.scene,0,0,100,100,"Recharge",F),
                    this.add(this.rechargeButton),
                    this.rechargeButton.on("click", ( () => {
                        this.emit("recharge")
                    }
                    ), this),
                    this.discovered = new Set,
                    this.updateInfo()
                }
                onScreenResize(e, t, i) {
                    this.x = e.centerX,
                    this.y = e.centerY,
                    this.width = e.width - 2 * t,
                    this.height = e.height - 2 * t;
                    const s = new Phaser.Geom.Rectangle(-this.width / 2 + 2 * t,-this.height / 2 + 2 * t,this.width - 4 * t,this.height - 4 * t);
                    this.background.setRadius(3 * t),
                    this.background.setWidth(this.width),
                    this.background.setHeight(this.height),
                    this.itemName.x = s.left,
                    this.itemName.y = s.top,
                    this.itemName.setFontSize(3.4 * t),
                    this.itemDesc.x = s.left,
                    this.itemDesc.y = this.itemName.y + 5.5 * t,
                    this.itemDesc.setFontSize(2.45 * t),
                    this.itemDesc.setWordWrapWidth(i ? .65 * s.width : s.width, !0),
                    this.itemDesc.setLineSpacing(1.5 * t),
                    this.emptyText.x = s.left,
                    this.emptyText.y = this.itemName.y + 5.5 * t,
                    this.emptyText.setFontSize(2.45 * t),
                    this.emptyText.setWordWrapWidth(i ? .65 * s.width : s.width, !0),
                    this.emptyText.setLineSpacing(1.5 * t);
                    const a = 9 * t
                      , r = 3.5 * t;
                    this.sellButton.x = s.right - a / 2,
                    this.sellButton.y = s.bottom - r / 2,
                    this.sellButton.resize(a, r);
                    const h = 12 * t
                      , o = 3.5 * t;
                    this.rechargeButton.x = s.right - a - 2 * t - h / 2,
                    this.rechargeButton.y = s.bottom - o / 2,
                    this.rechargeButton.resize(h, o);
                    const n = i ? new Phaser.Structs.Size(23 * t,s.height - r - 2 * t) : new Phaser.Structs.Size(24 * t,9 * t)
                      , c = i ? new Phaser.Geom.Rectangle(s.width / 2 - n.width,-s.height / 2,n.width,n.height) : new Phaser.Geom.Rectangle(-s.width / 2,s.height / 2 - n.height,n.width,n.height);
                    this.preview_left.x = c.left + c.height / 2,
                    this.preview_left.y = c.centerY,
                    this.preview_left.resize(c.height, t),
                    this.preview_center.x = c.centerX,
                    this.preview_center.y = c.centerY,
                    this.preview_center.resize(c.height, t),
                    this.preview_right.x = c.right - c.height / 2,
                    this.preview_right.y = c.centerY,
                    this.preview_right.resize(c.height, t),
                    this.arrow.x = c.centerX,
                    this.arrow.y = c.centerY,
                    this.arrow.setScale(.7 * c.height / this.arrow.width)
                }
                update(e, t) {
                    this.sellButton.update(e, t),
                    this.rechargeButton.update(e, t)
                }
                setSelected(e) {
                    (this.selected != e || this.selected && this.selected.tier != this.prevTier) && (this.selected = e,
                    e && e.imageKey && this.discovered.add(e.imageKey),
                    this.updateInfo())
                }
                updateInfo() {
                    if (this.itemName.setText("No selection"),
                    this.emptyText.setVisible(!0),
                    this.itemDesc.setText(""),
                    this.preview_left.setVisible(!1),
                    this.preview_center.setVisible(!1),
                    this.preview_right.setVisible(!1),
                    this.arrow.setVisible(!1),
                    this.sellButton.enabled = !1,
                    this.rechargeButton.enabled = !1,
                    this.selected) {
                        this.itemName.setText(this.selected.itemData.name),
                        this.emptyText.setVisible(!1),
                        this.rechargeButton.enabled = this.selected.chargeBlock,
                        this.selected.isGenerator || (this.sellButton.enabled = !this.selected.blocked);
                        let e = this.selected.nextTier;
                        if (e ? (this.preview_left.setVisible(!0),
                        this.preview_left.setImage(this.selected.itemData),
                        this.preview_left.setTier(this.selected.tier),
                        this.preview_right.setVisible(!0),
                        this.preview_right.setImage(e),
                        this.preview_right.setTier(this.selected.tier + 1),
                        this.preview_right.setExplored(this.discovered.has(e.key)),
                        this.arrow.setVisible(!0)) : (this.preview_center.setVisible(!0),
                        this.preview_center.setImage(this.selected.itemData),
                        this.preview_center.setTier(this.selected.tier)),
                        "experience" == this.selected.category) {
                            let t = [1, 3, 8, 20, 50][this.selected.tier - 1];
                            e ? this.itemDesc.setText(`Merge this item to the next rank or tap to collect ${t} Experience.`) : this.itemDesc.setText(`Tap to collect ${t} Experience. This item is at max rank.`)
                        } else
                            e ? this.itemDesc.setText(`Merge to create ${e.name}!`) : this.itemDesc.setText("This item is at max level and can no longer be merged.");
                        this.prevTier = this.selected.tier
                    }
                }
                updateItem(e) {
                    e == this.selected && (this.rechargeButton.enabled = this.selected.chargeBlock)
                }
            }
            class ee extends Phaser.GameObjects.Container {
                constructor(e) {
                    super(e, 0, 0),
                    this.scene = e,
                    e.add.existing(this),
                    this.hintAnimation = 1,
                    this.debug = this.scene.add.graphics(),
                    this.add(this.debug),
                    this.taskButton = new j(this.scene,0,0),
                    this.add(this.taskButton),
                    this.taskIcon = this.scene.add.image(0, 0, "gymleadernotes"),
                    this.taskButton.add(this.taskIcon),
                    this.taskButton.makeInteractive(this.taskIcon),
                    this.taskButton.on("click", ( () => {
                        this.emit("tasks")
                    }
                    )),
                    this.taskCountPill = new V(this.scene,0,0,100,100,25,16777215),
                    this.taskButton.add(this.taskCountPill),
                    this.taskCount = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "0"),
                    this.taskCount.setOrigin(.5),
                    this.taskCountPill.add(this.taskCount),
                    this.taskCountCheckmark = this.scene.add.image(0, 0, "checkmark_inv"),
                    this.taskCountPill.add(this.taskCountCheckmark)
                }
                onScreenResize(e, t, i) {
                    this.width = e.width - 2 * t,
                    this.height = e.height - 2 * t;
                    const s = this.getButtonRects(e, t, i)
                      , a = s[0];
                    this.taskButton.x = a.centerX,
                    this.taskButton.y = a.centerY,
                    this.taskIcon.setScale(a.width / this.taskIcon.width);
                    const r = this.taskIcon.width
                      , h = .1 * r;
                    this.taskIcon.input.hitArea.setTo(-h, -h, r + 2 * h, r + 2 * h),
                    this.taskCountPill.x = 5 * a.width / 16,
                    this.taskCountPill.y = 5 * a.height / 16,
                    this.taskCountPill.setRadius(1.75 * t),
                    this.taskCountPill.setWidth(5.5 * t),
                    this.taskCountPill.setHeight(0),
                    this.taskCount.x = this.taskCountCheckmark.visible ? -.4 * t : 0,
                    this.taskCount.setFontSize(2.5 * t),
                    this.taskCountCheckmark.x = 2.3 * t,
                    this.taskCountCheckmark.setScale(3.5 * t / this.taskCountCheckmark.width),
                    this.debug.clear(),
                    this.debug.fillStyle(16777215, .05),
                    s.forEach((e => {
                        this.debug.fillCircle(e.centerX, e.centerY, e.width / 2.5)
                    }
                    ))
                }
                update(e, t) {
                    let i = 1;
                    i -= .1 * this.taskButton.holdSmooth,
                    i *= this.hintAnimation,
                    this.taskButton.setScale(i)
                }
                getButtonRects(e, t, i) {
                    const s = [];
                    for (let a = 0; a < 5; a++)
                        if (i) {
                            const i = this.height
                              , r = (this.width - 5 * i) / 4;
                            s.push(new Phaser.Geom.Rectangle(e.left + a * i + a * r + t,e.top + 0 * t,i,i))
                        } else {
                            const i = this.width
                              , r = 4 * t;
                            s.push(new Phaser.Geom.Rectangle(e.left + 0 * t,e.centerY - (a - 2.5 + 1) * i - (a - 2.5 + .5) * r,i,i))
                        }
                    return s
                }
                updateTasks(e) {
                    this.taskCount.setText(e.length)
                }
                visualizeTasks(e) {
                    const t = e.some((e => e.success));
                    t && !this.hasTaskCompleted ? this.showHint() : !t && this.hasTaskCompleted && this.clearTweens(),
                    this.taskCountPill.setColor(t ? F : 16777215),
                    this.taskCount.setColor(t ? "#FFF" : "#000"),
                    this.taskCountCheckmark.setVisible(t)
                }
                get hasTaskCompleted() {
                    return this.taskCountCheckmark.visible
                }
                clearTweens() {
                    this.hintTween && (this.hintTween.stop(),
                    this.hintAnimation = 1)
                }
                showHint() {
                    this.clearTweens(),
                    this.hintTween = this.scene.tweens.add({
                        targets: this,
                        hintAnimation: {
                            from: 1,
                            to: 1.175
                        },
                        yoyo: !0,
                        ease: "Sine.Out",
                        duration: 300,
                        repeat: 1,
                        onComplete: () => {
                            this.scene && (this.hintTween = this.scene.tweens.add({
                                targets: this,
                                hintAnimation: {
                                    from: 1,
                                    to: 1.075
                                },
                                yoyo: !0,
                                ease: "Sine.Out",
                                duration: 200,
                                onComplete: () => {
                                    this.scene && (this.hintTween = this.scene.tweens.add({
                                        targets: this,
                                        hintAnimation: {
                                            from: 1,
                                            to: 1.015
                                        },
                                        yoyo: !0,
                                        ease: "Sine.Out",
                                        duration: 100
                                    }))
                                }
                            }))
                        }
                    })
                }
            }
            class te extends Phaser.GameObjects.Container {
                constructor(e) {
                    super(e, 0, 0),
                    this.scene = e,
                    e.add.existing(this),
                    this.setDepth(10004),
                    this.setVisible(!1),
                    this.setAlpha(0),
                    this.openState = !1,
                    this.openValue = 0,
                    this.fade = this.scene.add.rectangle(0, 0, 100, 100, 0, .5),
                    this.fade.setInteractive().on("pointerdown", this.close, this),
                    this.add(this.fade),
                    this.background = new V(this.scene,0,0,100,100,25,16773595),
                    this.background.setInteractive().on("pointerdown", ( () => {}
                    ), this),
                    this.add(this.background),
                    this.title = this.scene.createText(0, 0, 40, this.scene.weights.black, "#000", "Title"),
                    this.title.setOrigin(.5),
                    this.add(this.title)
                }
                onScreenResize(e, t) {
                    this.fade.setPosition(e.centerX, e.centerY),
                    this.fade.displayWidth = 2 * this.scene.W,
                    this.fade.displayHeight = 2 * this.scene.H,
                    this.background.setRadius(3 * t),
                    this.background.setPosition(e.centerX, e.centerY),
                    this.background.setWidth(this.width),
                    this.background.setHeight(this.height),
                    this.background.input.hitArea.setTo(0, 0, this.background.width, this.background.height),
                    this.title.x = e.centerX,
                    this.title.y = e.centerY - this.height / 2 - t,
                    this.title.setStroke("#FFF1DB", 3 * t),
                    this.title.setFontSize(10 * t)
                }
                update(e, t) {
                    const i = this.openState ? t / 300 : -t / 300;
                    this.openValue = Phaser.Math.Clamp(this.openValue + i, 0, 1);
                    const s = Phaser.Math.Easing.Cubic.Out(this.openValue);
                    this.setVisible(s > 0),
                    this.setAlpha(s),
                    this.y = 100 * (1 - s)
                }
                open() {
                    this.openState = !0,
                    this.fade.input.enabled = !0,
                    this.background.input.enabled = !0
                }
                close() {
                    this.openState = !1,
                    this.fade.input.enabled = !1,
                    this.background.input.enabled = !1
                }
                get isOpen() {
                    return this.openState
                }
            }
            class ie extends Phaser.GameObjects.Container {
                constructor(e, t, i, s, a, r, h=0) {
                    super(e, t, i),
                    this.scene = e,
                    this.width = s,
                    this.height = a,
                    this.thinHeight = r,
                    this.steps = h,
                    this.background = new V(this.scene,0,0,s + r,r,r / 2,3678741),
                    this.add(this.background);
                    const o = r + a;
                    if (this.background.setInteractive({
                        hitArea: this.background,
                        useHandCursor: !0,
                        draggable: !0
                    }).on("pointerdown", this.onDown, this).on("drag", this.onDrag, this),
                    this.background.input.hitArea.setTo(-o, -o, this.background.width + 2 * o, this.background.height + 2 * o),
                    this.notches = [],
                    h > 2)
                        for (let t = 0; t < h; t++) {
                            let i = -s / 2 + t / (h - 1) * s
                              , a = 0
                              , o = .75 * r
                              , n = e.add.ellipse(i, a, o, o, 13216895);
                            n.setAlpha(.25),
                            this.add(n),
                            this.notches.push(n)
                        }
                    this.button = e.add.ellipse(0, 0, a, a, 16769202),
                    this.targetX = this.button.x,
                    this.add(this.button),
                    this.minX = -s / 2,
                    this.maxX = s / 2,
                    this.minV = 0,
                    this.maxV = 1,
                    this._value = .5,
                    this._prev = .5
                }
                resize(e, t, i) {
                    this.width = e + i,
                    this.height = t,
                    this.thinHeight = i,
                    this.background.setRadius(i / 2),
                    this.background.setWidth(e + i),
                    this.background.setHeight(i);
                    const s = (i + t) / 2;
                    this.background.input.hitArea.setTo(-s, -s, this.background.width + 2 * s, this.background.height + 2 * s),
                    this.notches.forEach(( (t, s) => {
                        let a = -e / 2 + s / (this.steps - 1) * e
                          , r = .75 * i;
                        t.x = a,
                        t.displayWidth = t.displayHeight = r
                    }
                    )),
                    this.button.displayWidth = this.button.displayHeight = t,
                    this.minX = -e / 2,
                    this.maxX = e / 2,
                    this.value = this.value
                }
                setRange(e, t) {
                    this.minV = e,
                    this.maxV = t,
                    this.value = this._value
                }
                set value(e) {
                    e = Phaser.Math.Clamp(e, this.minV, this.maxV),
                    this._value = e,
                    this._value != this._prev && (this.emit("onChange", this._value),
                    this._prev = this._value);
                    let t = (e - this.minV) / (this.maxV - this.minV)
                      , i = this.minX + t * (this.maxX - this.minX);
                    this.button.x = this.targetX = i
                }
                get value() {
                    return this._value
                }
                onDown(e, t, i, s) {
                    let a = t - this.background.width / 2;
                    this.background.input.dragStartX = a,
                    this.onDrag(e, a, 0)
                }
                onDrag(e, t, i) {
                    if (t = Phaser.Math.Clamp(t, this.minX, this.maxX),
                    this.steps > 0) {
                        let e = (t - this.minX) / (this.maxX - this.minX);
                        e = Math.round(e * (this.steps - 1)) / (this.steps - 1),
                        t = this.minX + e * (this.maxX - this.minX)
                    }
                    this.targetX = t;
                    let s = (t - this.minX) / (this.maxX - this.minX)
                      , a = this.minV + s * (this.maxV - this.minV);
                    this._value = a,
                    this._value != this._prev && (this.emit("onChange", this._value),
                    this._prev = this._value)
                }
                lock() {
                    this.button.removeInteractive(),
                    this.button.fillColor = 5592405,
                    this.background.setColor(5592405)
                }
                update(e, t) {
                    this.button.x += .5 * (this.targetX - this.button.x)
                }
            }
            class se extends ie {
                constructor(e, t, i, s, a, r) {
                    super(e, t, i, s, a, r, 2),
                    this.notches.forEach((e => {
                        e.setVisible(!1)
                    }
                    )),
                    this.on("onChange", (e => {
                        this.background.setColor(e ? F : G)
                    }
                    ))
                }
                onDown() {
                    this.targetX = this.value ? this.minX : this.maxX,
                    this._value = 1 - this.value,
                    this._value != this._prev && (this.emit("onChange", this._value),
                    this._prev = this._value)
                }
                onDrag() {}
            }
            const ae = [.5, .75, 1, 2]
              , re = ["Lowest", "Low", "Normal", "High"];
            class he extends te {
                constructor(e) {
                    super(e),
                    this.title.setText("Options"),
                    this.hintLabel = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Show hints"),
                    this.hintLabel.setOrigin(0, 1),
                    this.add(this.hintLabel),
                    this.hintDescription = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Show a visual cue for matching items"),
                    this.hintDescription.setOrigin(0, 0),
                    this.add(this.hintDescription),
                    this.hintToggle = new se(this.scene,0,0,20,10,14),
                    this.hintToggle.value = 1,
                    this.add(this.hintToggle),
                    this.qualityLabel = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Resolution"),
                    this.qualityLabel.setOrigin(0, 1),
                    this.add(this.qualityLabel),
                    this.qualityDescription = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Anti-aliasing quality. A lower resolution may improve performance."),
                    this.qualityDescription.setOrigin(0, 0),
                    this.add(this.qualityDescription),
                    this.qualityButton = new J(this.scene,0,0,100,10,"Quality",E),
                    this.qualityButton.on("click", ( () => {
                        this.qualityIndex = (this.qualityIndex - 1 + ae.length) % ae.length,
                        this.qualityButton.setText(`x${this.qualityScale}`),
                        this.emit("quality")
                    }
                    )),
                    this.qualityIndex = 3,
                    this.qualityButton.setText(`x${this.qualityScale}`),
                    this.add(this.qualityButton),
                    this.resetLabel = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Reset game"),
                    this.resetLabel.setOrigin(0, 1),
                    this.add(this.resetLabel),
                    this.resetDescription = this.scene.createText(0, 0, 40, this.scene.weights.bold, "#000", "Erase your current progress and restart the game from the beginning"),
                    this.resetDescription.setOrigin(0, 0),
                    this.add(this.resetDescription),
                    this.resetButton = new J(this.scene,0,0,100,10,"Reset",E),
                    this.resetButton.on("click", ( () => {
                        this.emit("reset")
                    }
                    )),
                    this.add(this.resetButton),
                    this.updateQueue = [this.qualityButton, this.hintToggle, this.resetButton]
                }
                onScreenResize(e, t) {
                    this.width = e.width - 4 * t,
                    this.height = 90 * t,
                    super.onScreenResize(e, t);
                    const i = new Phaser.Geom.Rectangle(e.centerX - this.width / 2 + 8 * t,e.centerY - this.height / 2 + 16 * t,this.width - 16 * t,this.height - 32 * t)
                      , s = 22 * t
                      , a = 13 * t
                      , r = 6 * t
                      , h = 5 * t
                      , o = 2.75 * t
                      , n = 1 * t
                      , c = i.width - a - 4 * t;
                    let l = i.centerY - s;
                    this.hintLabel.x = i.left,
                    this.hintLabel.y = l - n,
                    this.hintLabel.setFontSize(h),
                    this.hintDescription.x = i.left,
                    this.hintDescription.y = l + n,
                    this.hintDescription.setFontSize(o),
                    this.hintDescription.setWordWrapWidth(c),
                    this.hintDescription.setLineSpacing(1.5 * t),
                    this.hintToggle.resize(a - r, 4 * t, r),
                    this.hintToggle.x = i.right - this.hintToggle.width / 2,
                    this.hintToggle.y = l,
                    l += s,
                    this.qualityLabel.x = i.left,
                    this.qualityLabel.y = l - n,
                    this.qualityLabel.setFontSize(h),
                    this.qualityDescription.x = i.left,
                    this.qualityDescription.y = l + n,
                    this.qualityDescription.setFontSize(o),
                    this.qualityDescription.setWordWrapWidth(c),
                    this.qualityDescription.setLineSpacing(1.5 * t),
                    this.qualityButton.resize(a, r),
                    this.qualityButton.x = i.right - this.qualityButton.width / 2,
                    this.qualityButton.y = l,
                    l += s,
                    this.resetLabel.x = i.left,
                    this.resetLabel.y = l - n,
                    this.resetLabel.setFontSize(h),
                    this.resetDescription.x = i.left,
                    this.resetDescription.y = l + n,
                    this.resetDescription.setFontSize(o),
                    this.resetDescription.setWordWrapWidth(c),
                    this.resetDescription.setLineSpacing(1.5 * t),
                    this.resetButton.resize(a, r),
                    this.resetButton.x = i.right - this.resetButton.width / 2,
                    this.resetButton.y = l
                }
                update(e, t) {
                    super.update(e, t),
                    this.updateQueue.forEach((i => {
                        i.update(e, t)
                    }
                    ))
                }
                open() {
                    super.open()
                }
                close() {
                    super.close()
                }
                get hintsEnabled() {
                    return this.hintToggle.value > .5
                }
                get qualityScale() {
                    return ae[this.qualityIndex] || 1
                }
                get qualityName() {
                    return re[this.qualityIndex] || 1
                }
            }
            class oe extends j {
                constructor(e, t, i, s) {
                    super(e, t, i),
                    this.scene = e,
                    this.size = s,
                    this.background = new V(e,0,0,s,s,25,11184810),
                    this.background.setAlpha(.5),
                    this.add(this.background),
                    this.image = e.add.image(0, 0, "selection"),
                    this.image.setScale(s / this.image.width),
                    this.add(this.image),
                    this.tierText = e.createText(-s / 2, -s / 2, .2 * s, e.weights.bold, "#000", "lvl"),
                    this.tierText.setOrigin(0),
                    this.add(this.tierText),
                    this.countText = e.createText(s / 2, s / 2, .25 * s, e.weights.bold, "#000", "0/1"),
                    this.countText.setOrigin(1),
                    this.add(this.countText)
                }
                resize(e, t) {
                    this.size = e,
                    this.background.setRadius(e / 3),
                    this.background.setWidth(e),
                    this.background.setHeight(e),
                    this.tierText.x = -e / 2,
                    this.tierText.y = -e / 2,
                    this.tierText.setFontSize(e / 5),
                    this.tierText.setStroke("#FFF", e / 5 / 4),
                    this.countText.x = e / 2,
                    this.countText.y = e / 2,
                    this.countText.setFontSize(e / 4),
                    this.countText.setStroke("#FFF", e / 4 / 4),
                    this.updateImage()
                }
                setItem(e, t, i) {
                    this.itemData = e,
                    this.updateImage(),
                    this.tierText.setText(`lvl. ${t}`),
                    this.maxCount = i,
                    this.setCount(0)
                }
                updateImage() {
                    this.itemData && (this.image.setTexture(this.itemData.key),
                    this.image.setScale((this.itemData.scale || 1) * this.size / this.image.width))
                }
                setCount(e) {
                    let t = e >= this.maxCount;
                    e = Math.min(e, this.maxCount),
                    this.countText.setText(`${e}/${this.maxCount}`),
                    this.background.setColor(t ? 5025616 : 13216895)
                }
            }
            class ne extends j {
                constructor(e, t, i, s, a) {
                    super(e, t, i),
                    this.scene = e,
                    this.background = new V(e,0,0,s,a,25,R),
                    this.add(this.background),
                    this.taskItemCount = 0,
                    this.taskBoxImages = [];
                    for (let t = 0; t < 5; t++) {
                        let t = new oe(e,0,.1 * a,100);
                        t.setVisible(!1),
                        this.add(t),
                        this.taskBoxImages.push(t)
                    }
                    this.title = e.createText(0, 0, 26, e.weights.bold, "#000", "Title"),
                    this.title.setOrigin(0, .5),
                    this.add(this.title),
                    this.makeInteractive(this.background),
                    this.on("click", ( () => {
                        this.emit("completeTask", this.taskChapter)
                    }
                    ))
                }
                update(e, t) {
                    this.setScale(1 - .1 * this.holdSmooth)
                }
                resize(e, t) {
                    this.width = e.width,
                    this.height = e.height,
                    this.background.setRadius(2 * t),
                    this.background.setWidth(this.width),
                    this.background.setHeight(this.height),
                    this.background.input.hitArea.setTo(0, 0, this.width, this.height);
                    const i = new Phaser.Geom.Rectangle(e.left + 3 * t,e.top + 3 * t,e.width - 6 * t,e.height - 6 * t)
                      , s = i.height
                      , a = 3 * t;
                    this.taskBoxImages.forEach(( (e, r) => {
                        e.x = i.centerX + (r - 2) * s / 2 + (r - 2) * a,
                        e.y = i.centerY,
                        e.resize(s, t)
                    }
                    )),
                    this.title.x = i.left,
                    this.title.y = e.top,
                    this.title.setFontSize(4 * t),
                    this.title.setStroke(L(this.background.getColor()), 2 * t)
                }
                getWhichBoxes(e) {
                    switch (e) {
                    case 1:
                        return [2];
                    case 2:
                        return [1, 3];
                    case 3:
                        return [0, 2, 4];
                    default:
                        return console.error("Unintended"),
                        [2]
                    }
                }
                setTask(e) {
                    this.title.setText(e.title || "Mission"),
                    this.taskChapter = e.chapter,
                    this.taskItemCount = e.items.length,
                    this.taskBoxImages.forEach((e => {
                        e.setVisible(!1)
                    }
                    )),
                    this.getWhichBoxes(this.taskItemCount).forEach(( (t, i) => {
                        const s = this.taskBoxImages[t]
                          , a = e.items[i]
                          , r = M[a.category][a.tier - 1];
                        s.setVisible(!0),
                        s.setItem(r, a.tier, a.amount)
                    }
                    ))
                }
                updateTask(e, t) {
                    console.assert(this.taskBoxImages.length >= t.length),
                    this.getWhichBoxes(this.taskItemCount).forEach(( (e, i) => {
                        this.taskBoxImages[e].setCount(t[i])
                    }
                    )),
                    this.background.input.enabled = e,
                    this.background.setColor(e ? 3774013 : R),
                    this.title.setStroke(L(this.background.getColor()), 2 * this.scene.layoutManager.unit)
                }
            }
            class ce extends te {
                constructor(e) {
                    super(e),
                    this.title.setText("Missions"),
                    this.taskBoxes = [];
                    for (let e = 0; e < 5; e++) {
                        let t = new ne(this.scene,0,0,100,100);
                        t.on("completeTask", (t => {
                            this.emit("completeTask", t, e)
                        }
                        ), this),
                        this.taskBoxes.push(t),
                        this.add(t)
                    }
                    this.taskCount = 0
                }
                onScreenResize(e, t) {
                    this.width = e.width - 4 * t,
                    this.height = (12 + 22 * this.taskCount) * t;
                    const i = new Phaser.Geom.Rectangle(e.centerX - this.width / 2 + 4 * t,e.centerY - this.height / 2 + 9 * t,this.width - 8 * t,this.height - 13 * t)
                      , s = 4 * t
                      , a = i.width
                      , r = (i.height - (this.taskCount - 1) * s) / this.taskCount;
                    this.taskBoxes.forEach(( (e, h) => {
                        e.x = i.centerX,
                        e.y = i.top + h * r + h * s + r / 2;
                        const o = new Phaser.Geom.Rectangle(-a / 2,-r / 2,a,r);
                        e.resize(o, t)
                    }
                    )),
                    super.onScreenResize(e, t)
                }
                update(e, t) {
                    super.update(e, t),
                    this.taskBoxes.forEach((i => {
                        i.update(e, t)
                    }
                    ))
                }
                open() {
                    super.open()
                }
                close() {
                    super.close()
                }
                updateTasks(e) {
                    this.taskCount = e.length,
                    this.taskBoxes.forEach(( (t, i) => {
                        t.setVisible(!1),
                        i < e.length && (t.setVisible(!0),
                        t.setTask(e[i]))
                    }
                    ))
                }
                visualizeTasks(e) {
                    for (let t = 0; t < e.length; t++)
                        this.taskBoxes[t].updateTask(e[t].success, e[t].count)
                }
            }
            class le extends te {
                constructor(e) {
                    super(e)
                }
            }
            class ge extends Phaser.GameObjects.Graphics {
                constructor(e) {
                    super(e),
                    this.scene = e,
                    e.add.existing(this),
                    this.statusSize = this.newSize(12, 1),
                    this.navSize = this.newSize(6, 1),
                    this.infoSize = this.newSize(5, 1),
                    this.gridSize = this.newSize(7, 9),
                    this.modalSize = this.newSize(2, 3),
                    this.sideNavSize = this.newSize(2, 5, !1),
                    this.sideInfoSize = this.sideNavSize,
                    this.innerSideNavSize = this.newSize(1, 8, !1),
                    this.innerSideInfoSize = this.newSize(16, 9, !1),
                    this.statusSize.width = this.navSize.width = this.infoSize.width = this.gridSize.width = 1,
                    this.sideNavSize.height = this.sideInfoSize.height = this.statusSize.height + this.gridSize.height;
                    const t = this.statusSize.height + this.navSize.height + this.infoSize.height + this.gridSize.height
                      , i = this.statusSize.height + this.gridSize.height
                      , s = this.sideNavSize.width + this.sideInfoSize.width + this.gridSize.width;
                    this.portraitSize = this.newSize(1, t),
                    this.landscapeSize = this.newSize(1, i),
                    this.landscapeTotalSize = this.newSize(s, i),
                    this.gameSize = this.portraitSize,
                    this.unit = 1
                }
                onScreenResize(e, t) {
                    this.clear(),
                    this.portraitSize.constrain(e, t, !0),
                    this.landscapeSize.constrain(e, t, !0),
                    this.landscapeTotalSize.constrain(e, t, !0);
                    const i = this.landscapeTotalSize.height < t;
                    this.gameSize = i ? this.portraitSize : this.landscapeSize,
                    this.statusSize.constrain(this.gameSize.width, this.gameSize.height, !0),
                    this.navSize.constrain(this.gameSize.width, this.gameSize.height, !0),
                    this.infoSize.constrain(this.gameSize.width, this.gameSize.height, !0),
                    this.gridSize.constrain(this.gameSize.width, this.gameSize.height, !0),
                    this.modalSize.constrain(this.gameSize.width, this.gameSize.height, !0),
                    this.sideNavSize.constrain(this.landscapeTotalSize.width, this.landscapeTotalSize.height, !0),
                    this.sideInfoSize.constrain(this.landscapeTotalSize.width, this.landscapeTotalSize.height, !0),
                    this.innerSideNavSize.constrain(this.sideNavSize.width, this.sideNavSize.height, !0),
                    this.innerSideInfoSize.constrain(this.sideInfoSize.width, this.sideInfoSize.height, !0);
                    const s = this.newRect(e / 2 - this.landscapeTotalSize.width / 2, 3 * (t - this.landscapeTotalSize.height) / 4, this.landscapeTotalSize.width, this.landscapeSize.height, !1)
                      , a = this.newRect(e / 2 - this.gameSize.width / 2, 3 * (t - this.gameSize.height) / 4, this.gameSize.width, this.gameSize.height, !1);
                    this.unit = .01 * a.width,
                    this.modalSize.width -= 4 * this.unit,
                    this.modalSize.height -= 4 * this.unit;
                    const r = i ? this.newRect(a.left, 0, this.statusSize.width, this.statusSize.height, !1) : this.newRect(s.left + this.sideNavSize.width, 0, this.statusSize.width, this.statusSize.height, !1)
                      , h = i ? this.newRect(a.left, a.bottom - this.navSize.height, this.navSize.width, this.navSize.height, !1) : this.newRect(s.left + this.sideNavSize.width - this.innerSideNavSize.width, s.top, this.innerSideNavSize.width, this.innerSideNavSize.height, !1)
                      , o = i ? this.newRect(a.left, h.top - this.gridSize.height, this.gridSize.width, this.gridSize.height, !1) : this.newRect(s.left + this.sideNavSize.width, a.bottom - this.gridSize.height, this.gridSize.width, this.gridSize.height, !1);
                    return {
                        status: r,
                        nav: h,
                        grid: o,
                        info: i ? this.newRect(a.left, o.top - this.infoSize.height, this.infoSize.width, this.infoSize.height, !1) : this.newRect(s.right - this.innerSideInfoSize.width, o.top, this.innerSideInfoSize.width, this.innerSideInfoSize.height, !1),
                        modal: this.newRect(e / 2, t / 2, this.modalSize.width, this.modalSize.height, !0),
                        cellSize: this.newRect(o.centerX, o.centerY, o.width - 4 * this.unit, o.height - 3 * this.unit * 9 / 7).width / 7,
                        unit: this.unit,
                        isVertical: i
                    }
                }
                newSize(e, t, i=!0) {
                    const s = i ? Phaser.Structs.Size.WIDTH_CONTROLS_HEIGHT : Phaser.Structs.Size.HEIGHT_CONTROLS_WIDTH;
                    return new Phaser.Structs.Size(e,t,s)
                }
                newRect(e, t, i, s, a=!0) {
                    const r = a ? i / 2 : 0
                      , h = a ? s / 2 : 0;
                    return new Phaser.Geom.Rectangle(e - r,t - h,i,s)
                }
                drawRect(e, t, i=1) {
                    this.lineStyle(i, t, 1),
                    this.fillStyle(t, .1),
                    this.strokeRectShape(e),
                    this.fillRectShape(e)
                }
            }
            const de = {
                type: Phaser.WEBGL,
                width: 480,
                height: 640,
                scale: {
                    mode: Phaser.Scale.FIT,
                    resizeInterval: 1e3
                },
                scene: [class extends a {
                    constructor() {
                        super({
                            key: "PreloadScene"
                        })
                    }
                    init() {
                        this.scale.setGameSize(window.innerWidth, window.innerHeight),
                        this.scale.refresh();
                        let e = this.renderer;
                        e.pipelines && (e.pipelines.addPostPipeline("GrayScalePostFilter", I),
                        e.pipelines.addPostPipeline("BlurPostFilter", D))
                    }
                    preload() {
                        let e = .5 * this.W
                          , t = this.CX - e / 2
                          , i = this.CY
                          , s = (this.add.rectangle(t, i, e, 4, 6710886).setOrigin(0, .5),
                        this.add.rectangle(t, i, 1, 8, 14540253).setOrigin(0, .5));
                        this.createText(t, i, 3 * s.height, this.weights.bold, "#DDD", "Loading...").setOrigin(0, 1.5),
                        this.load.on("progress", (t => {
                            s.width = t * e
                        }
                        ));
                        for (let e of P)
                            this.load.image(e.key, e.path);
                        for (let e of z)
                            this.load.spritesheet(e.key, e.path, {
                                frameWidth: e.width,
                                frameHeight: e.height
                            })
                    }
                    create() {
                        this.fade(!0, 100, 0),
                        this.addEvent(110, ( () => {
                            this.scene.start("GameScene")
                        }
                        ))
                    }
                }
                , class extends a {
                    constructor() {
                        super({
                            key: "GameScene"
                        })
                    }
                    create() {
                        this.cameras.main.setBackgroundColor(7162945),
                        this.fade(!1, 200, 0),
                        this.hintTimer = 0,
                        this.experience = 0,
                        this.level = localStorage.getItem("PokeMerge1Level"),
                        this.GRID_SIZE = 148,
                        this.CELL_SIZE = 138,
                        this.input.on("pointerdown", ( () => {
                            this.hintTimer = 0
                        }
                        )),
                        this.input.on("pointerup", ( () => {
                            this.hintTimer = 0
                        }
                        )),
                        this.layoutManager = new ge(this),
                        this.layoutManager.setDepth(10004),
                        this.grid = new q(this,this.CX,this.CY),
                        this.grid.on("checkTasks", this.visualizeTasks, this),
                        this.grid.on("experience", this.gainExperience, this),
                        this.statusPanel = new $(this),
                        this.statusPanel.on("settings", ( () => {
                            this.settingsModal.open()
                        }
                        )),
                        this.itemInfoPanel = new Q(this),
                        this.itemInfoPanel.on("sell", ( () => {
                            this.grid.sellSelected()
                        }
                        ), this),
                        this.itemInfoPanel.on("recharge", ( () => {
                            this.grid.rechargeSelected()
                        }
                        ), this),
                        this.grid.on("selection", (e => {
                            this.itemInfoPanel.setSelected(e)
                        }
                        ), this),
                        this.grid.on("updateItem", (e => {
                            this.itemInfoPanel.updateItem(e)
                        }
                        ), this),
                        this.navigationPanel = new ee(this),
                        this.navigationPanel.on("tasks", ( () => {
                            this.taskListModal.open()
                        }
                        )),
                        this.settingsModal = new he(this),
                        this.settingsModal.on("quality", this.onScreenResize, this),
                        this.settingsModal.on("reset", ( () => {
                            confirm("This will erase your current progress. Are you sure?") && (this.grid.clearData(),
                            this.settingsModal.close(),
                            this.onScreenResize())
                        }
                        ), this),
                        this.taskListModal = new ce(this),
                        this.taskListModal.on("completeTask", ( (e, t) => {
                            this.grid.completeTask(t),
                            this.task.completeTask(e)
                        }
                        ), this),
                        this.itemDetailsModal = new le(this),
                        this.task = new X(this),
                        this.task.on("newTask", this.updateTasks, this),
                        this.updateTasks(),
                        this.map = new K(this),
                        this.map.setDepth(10003),
                        this.gainExperience(0),
                        addEventListener("resize", (e => {
                            this.onScreenResize()
                        }
                        )),
                        this.onScreenResize()
                    }
                    onScreenResize() {
                        const e = this.settingsModal.qualityScale
                          , t = e * window.innerWidth
                          , i = e * window.innerHeight;
                        this.scale.setGameSize(t, i),
                        this.scale.refresh(),
                        setTimeout(( () => {
                            this.scale.refresh()
                        }
                        ), 500);
                        const s = this.layoutManager.onScreenResize(t, i);
                        this.GRID_SIZE = s.cellSize,
                        this.CELL_SIZE = 140 / 148 * this.GRID_SIZE,
                        this.grid.onScreenResize(s.grid, s.unit),
                        this.map.onScreenResize(this.W, this.H),
                        this.statusPanel.onScreenResize(s.status, s.unit),
                        this.itemInfoPanel.onScreenResize(s.info, s.unit, s.isVertical),
                        this.navigationPanel.onScreenResize(s.nav, s.unit, s.isVertical),
                        this.settingsModal.onScreenResize(s.modal, s.unit),
                        this.taskListModal.onScreenResize(s.modal, s.unit),
                        this.itemDetailsModal.onScreenResize(s.modal, s.unit)
                    }
                    update(e, t) {
                        this.grid.update(e, t),
                        this.map.update(e, t),
                        this.statusPanel.update(e, t),
                        this.itemInfoPanel.update(e, t),
                        this.navigationPanel.update(e, t),
                        this.settingsModal.update(e, t),
                        this.taskListModal.update(e, t),
                        this.itemDetailsModal.update(e, t),
                        this.anyModalOpen ? this.hintTimer = 0 : this.hintTimer += t / 1e3,
                        this.hintTimer > 3 && (this.hintTimer = 0,
                        this.settingsModal.hintsEnabled && this.grid.showHint(),
                        this.navigationPanel.hasTaskCompleted && this.navigationPanel.showHint())
                    }
                    updateTasks() {
                        const e = this.task.getCurrentTasks();
                        this.navigationPanel.updateTasks(e),
                        this.taskListModal.updateTasks(e),
                        this.grid.updateTasks(e);
                        const t = this.layoutManager.onScreenResize(this.W, this.H);
                        this.taskListModal.onScreenResize(t.modal, t.unit)
                    }
                    visualizeTasks(e) {
                        this.navigationPanel.visualizeTasks(e),
                        this.taskListModal.visualizeTasks(e)
                    }
                    gainExperience(e) {
                        const t = 8 * this.level;
                        if (this.experience += e,
                        this.experience >= t)
                            return this.level += 1,
                            this.experience -= t,
                            this.grid.spawnLevelUpReward(this.level - 1),
                            this.gainExperience(0);
                        this.statusPanel.updateExperience(this.level, this.experience, t)
                        localStorage.setItem("PokeMerge1Level", this.level)
                    }
                    get anyModalOpen() {
                        return this.settingsModal.isOpen || this.taskListModal.isOpen || this.itemDetailsModal.isOpen
                    }
                }
                , class extends a {
                    constructor() {
                        super({
                            key: "UIScene"
                        })
                    }
                    create() {}
                    update(e, t) {}
                }
                ],
                plugins: {
                    global: []
                }
            };
            new Phaser.Game(de)
        }
    }, i = {};
    function s(e) {
        var a = i[e];
        if (void 0 !== a)
            return a.exports;
        var r = i[e] = {
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, s),
        r.exports
    }
    s.m = t,
    e = [],
    s.O = (t, i, a, r) => {
        if (!i) {
            var h = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [i,a,r] = e[c], o = !0, n = 0; n < i.length; n++)
                    (!1 & r || h >= r) && Object.keys(s.O).every((e => s.O[e](i[n]))) ? i.splice(n--, 1) : (o = !1,
                    r < h && (h = r));
                o && (e.splice(c--, 1),
                t = a())
            }
            return t
        }
        r = r || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > r; c--)
            e[c] = e[c - 1];
        e[c] = [i, a, r]
    }
    ,
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    ( () => {
        var e;
        s.g.importScripts && (e = s.g.location + "");
        var t = s.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var i = t.getElementsByTagName("script");
            i.length && (e = i[i.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        s.p = e
    }
    )(),
    ( () => {
        var e = {
            179: 0
        };
        s.O.j = t => 0 === e[t];
        var t = (t, i) => {
            var a, r, [h,o,n] = i, c = 0;
            for (a in o)
                s.o(o, a) && (s.m[a] = o[a]);
            if (n)
                var l = n(s);
            for (t && t(i); c < h.length; c++)
                r = h[c],
                s.o(e, r) && e[r] && e[r][0](),
                e[h[c]] = 0;
            return s.O(l)
        }
          , i = self.webpackChunkMergeGame = self.webpackChunkMergeGame || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )();
    
    var a = s.O(void 0, [216], ( () => s(291)));
    a = s.O(a)
}

)();
