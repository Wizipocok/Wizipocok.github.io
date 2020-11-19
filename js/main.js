
function vermokucs() {

    let valasz = prompt("Sétálsz az erdőben amikor egyszercsak megtámad a VérMókucs! Mit csinálsz?\n 1 Hozzá dobod a kulacsodat!\n 2 Sarkonfordulsz és rohansz ki az erdőből!")
    if (valasz == 1) {
        let valasz = prompt("A VérMókucs tornászokat megszégyenítő mozdulattal elkerüli a támadásodat. Most már nem csak hogy habzik a szája, a szemei is vérben úsznak. Két lehetőséged van:\n 1 Előveszed a vadászkéset a táskádből és elkezdesz hadonászni vele, remélve hogy ezáltal majd jól megijed!\n 2 Bízol abban, hogy a VérMókucsok mindig ilyenek és igazából csak azt akarja hogy megsimizd a kicsi buksiját!")
        if (valasz == 1) {
            let valasz = prompt("Mivel a vadászkést eddig nem sokat használtad ezért ugyetlenül elkezdesz vele csapkodni magad előtt! Az állat ettől a furcsa mozgástól kicsit megszeppen. Elkezd lassítani majd megáll. Ahogy ezt észreveszed kicsit megnyugszol és már lassabban hadonászol. Ezt kihasználva a Vérmókucs újfent megiramodik feléd. Elkezd cikk-cakkban futni feléd és mikor már csak 1 méterre van tőlet nekedugrik! Mit csinálsz most?\n 1 A kést előre tartva bízol benne hogy az állat felnyársalja saját magát!\n 2 Továbbra is csak hadonászol össze meg vissza?")
            if (valasz == 1) {
                let valasz = prompt("Úgy is lett! Felnyársalódott a kis jószág késedre. Megkönnybbülsz bár alig bírsz állva maradni. Tested a sokktól elkezd remegni. Fél perc elteltével tudsz csak megnyugodni annyira, hogy leülj az avarba. Megnézed a késen lévő állatot mi is lett vele pontosan. Csodálkozba tapasztalod, hogy nem vérzik annak ellenére, hogy átment a hasán. Ekkor az eddig mozdulatlan test megrándult. Fájdalmas üvöltésbe kezdett majd megpróbált a kezed felé menni. Ettől úgy megijedtél hogy:\n 1 Beleszúrod a legközelebbi fába a kést és hanyatt homlok menekülsz ki az erdőből!\n 2 Ilyedtedben elejted, majd elkezdesz az ellenkező irányba futni ahogy csak bírsz!?")
                if (valasz == 1) {
                    alert("Ahogy kiérsz az erdőből még hallod a fülsüketítő vísítást. Hátranézel, majd vissza előre és futsz tovább ameddig csak bírsz. Túlélted, gondolod magadba mikor egyre közelebb hallod a félelmetes hangot. Nem mersz hátranézni csak ftsz és futsz ahogy a lábad bírja. Sajnos az úton nincs semmi és senki így hamarosan már a karmait is hallod az aszfalton. De nem mersz hátranézni csak futsz tovább. A VérMókucs egyre közelebb kerül majd ráugrik a lábadra és beleharap  a combodba. A fájdalomtól és a kimerültségtől elesel és bevered a fejedet. Pár perc múlva felébredsz és azt veszed észre, hogy a erdőben fekszel és iszonyatosan hasogat a fejed. Felkelsz majd mosolyogva tapasztalod hogy csak nekimentél egy faágnak amit nem vettél észre magad előtt. Egy furcsa képzelgés volt csupán!")

                } else if (valasz == 2) {
                    alert("A VérMókucs addig ügyeskedig amig megszabadul a késtől és elkezd feléd futni. Hamarossan utolér és leharapja a jobb bokádat! Ettől elesel és a következő pillanatban már a arcodat marcangolja a bestia. Utolsó lehelletedig próbálsz védekezni de hiába. Aki egyszer találkozik egy VérMókuccsal az nem fog beszélni róla!")
                } else { alert("Rossz gomb, kezdd elölről!") }


            } else if (valasz == 2) {
                alert("Pechedre pont rosszkor csaptál így a feléd ugró bestia beleharap az alkarodba. Ettől elejted a kést és próbálod lerázni magadról. Több se kellett a VérMókucsnak. Elengedte a karod majd egyenesen a torkod felé futott és egy erős harapással kettéválasztotta a fejed a testedtől. Győzedelmeskedett a vadon szörnyszülöttje!")
            } else { alert("Rossz gomb, kezdd elölről!") }


        } else if (valasz == 2) {
            alert("Jobb kezedet a VérMókucs feje felé nyújtod. Erre a kis állat megszeppen és magáll. Óvatosan közeledtek egymás felé. Mikor éppen megsimiznéd a kis buksiját az álat beleharap a tenyeredbe, mancsaival átöleli az alkarodat. Egy hírtelen rántást követően kiszakítja tőből a kezed! Az adrenalin szétáramlik a testedben és próbálsz elmenekülni a fenavadtól! Alig hogy megteszel 2 lépést a VérMókucs ráugrik a hátadra, felmászik a nyakadhoz, előrefordul és átharapja a torkodat és az ütőereidet. Ekkor összeesel és elvérzel. Győzedelmeskedett a vadon egy furcsa teremtménye!")
        } else { alert("Rossz gomb, kezdd elölről!") }

    } else if (valasz == 2) {
        alert("Sikítva kirohansz az erdő szélére. Hátrafordulsz és látod hogy nincs mögötted semmi. Megkönnyebbülést érzel, lehet nem is tamadt meg semmi?")

    } else {
        alert("Rossz gomb, kezdd elölről!")
    }

}


function dobokocka() {
    function kocka(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    alert("A számítógép által dobott érték: " + kocka(1, 6))
}

function korkerulet() {

    function kerulet(atmero) {
        let r = atmero / 2
        let k = r * 2 * 3.14
        return k
    }

    let x = Number(prompt("Add meg a kör átmérőjét:"))

    let ker = kerulet(x)
    ker = Math.round(ker * 100) / 100

    alert("Ennek a körnek a kerülete: " + ker + " cm.")

}

function tobbkocka() {

    function veletlen(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);

    }

    let kockaSzam = Number(prompt("Hány dobókockával dobjak?"));
    let i = 0;
    let ujszam
    let szamok = [];

    while (i != kockaSzam) {
        ujszam = veletlen(1, 6);
        szamok.push(ujszam);
        i++
    }

    alert("Dobások eredménye: " + szamok)

}

function faktorialis() {

    let szam = Number(prompt("Melyik számnak kéred a faktoriálisát?"))
    let i = 1
    let x = 1

    while (i <= szam) {
        x = x * i
        i++
    }

    alert(x)

}

function maxkeres() {

    let lista = [1, 2, 3, 4, 10, 25];
    let big = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > big) {
            big = lista[i];
        }
    }

    alert("A megadott tömbben a legnagyobb szám a  következő: " + big)

}

function bingbang() {

    let szamok = [];
    let i = 1;

    while (i <= 100) {

        szamok.push(i);
        i++;
    }
    for (let j = 0; j < szamok.length; j++) {
        if (szamok[j] % 3 == 0 && szamok[j] % 5 == 0) {
            szamok[j] = "BingBang"
        } else if (szamok[j] % 3 == 0) {
            szamok[j] = "Bing";
        } else if (szamok[j] % 5 == 0) {
            szamok[j] = "Bang";
        }
    }

    console.log(szamok);

}

function kopapirollo() {

    function veletlen(min, max) {
        return (Math.floor(Math.random() * (max - min + 1) + min))
    }
    let x = veletlen(1, 3)
    let y = prompt("Írd be az alábbiak közül valamelyiket:\nkő / papír / olló")

    if (x == 1 && y == "kő") {
        alert("Döntetlen!")
    } else if (x == 1 && y == "papír") {
        alert("Nyertél")
    } else if (x == 1 && y == "olló") {
        alert("Vesztettél")
    } else if (x == 2 && y == "kő") {
        alert("Vesztettél!")
    } else if (x == 2 && y == "papír") {
        alert("Döntetlen")
    } else if (x == 2 && y == "olló") {
        alert("Nyertél")
    } else if (x == 3 && y == "kő") {
        alert("Nyertél!")
    } else if (x == 3 && y == "papír") {
        alert("Vesztettél")
    } else if (x == 3 && y == "olló") {
        alert("Nyertél")
    }

}