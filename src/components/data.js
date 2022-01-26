let places = [
    {
        name: "Forum",
        id: 1,
        type: "coffee",
        shortDescription: "Cozy bar with seasonal coffees from best european roasteries",
        direction: "Elektoralna 11",
        image: "/image/coffee/forum.jpg",
        description: `Kawiarnia oferuje paletę kaw mlecznych opartych na espresso,
         przygotowywanych w przepięknym trzy grupowym ekspresie Synesso Syncra,
          a także kawy przelewowe – tu przede wszystkim króluje AeroPress.
           Nieważne czy przelew przygotuje Wam Ilona Przewoźniczek, Mistrzyni Polski AeroPress 2014,
            czy Sławek Saran, Mistrz Polski Brewers Cup 2016, macie pewność, że dostaniecie kawę idealną.
             Na półkach znajdziecie m. in. ziarna z polskiego Coffeelab i najlepszych zagranicznych palarni 
             – Koppi, Good Life Coffee, The Barn, Five Elepthant czy Drop Coffee.
             Możemy tu spróbować również takich napojów jak np. kombucha, czyli fermentowana herbata 
             albo cold brew tepache – fermentowany napój z ananasa z kawą macerowaną na zimno. 
             W tygodniu można już od 7.30 zacząć tu dzień śniadaniem zamawiając np. tost z ricottą własnej roboty,
              fenkułem, porzeczką i miętą, tost z pieczoną brzoskwinią, mozzarellą oraz polskim prosciutto
               albo tost z jajkiem z czipsami z szałwii i płatkami chilli.`,
        facebook: "https://www.facebook.com/forumcoffee/",
        loc_right: "29%",
        loc_top: "22.5%",
    },

    {
        name: "Karma Coffee",
        id: 2,
        type: "coffee",
        shortDescription: `Kawa i śniadanie w najbardziej urokliwym miejscu: na Placu Zbawiciela`,
        direction: "Mokotowska 17",
        image: "/image/coffee/karma.jpg",
        description: 'Coffee Karma powstała w 2002 roku. To pierwsza w Warszawie kawiarnia która może się pochwalić wypalaną na miejscu, świeżą kawą. ' +
            'Znajduje się w jednym z najbardziej urokliwych, a jednocześnie kultowych miejsc na mapie stolicy: na Placu Zbawiciela. ' +
            `Kawa w ogródku kawiarnianym z widokiem na pędzące tramwaje i uroczy plac Zbawiciela to "must do" pobytu w Warszawie.` +
            ' Specjalnością Coffee Karma jest świeżo palona kawa z wyselekcjonowanych krajów świata, wypalana w pięknym  piecu Probat L5, wyekponowanym w centralnym miejscu kawiarni.' +
            ' Życie kawiarniane Karmy jest mocno związane z kulturą. Każdego miesiąca prezentuje się tu pracę różnorodnych artystów. ' +
            'Są to zarówno koncerty, jak i wieczory poetyckie i wernisaże',
        facebook: "https://www.facebook.com/coffeekarma.warszawa/",
        loc_right: "52%",
        loc_top: "81%",
    },
    {
        name: "Wrzenie Świata",
        id: 3,
        type: "coffee",
        shortDescription: "Down-to-earth, independent bookstore featuring a selection of a cafe and wine.",
        direction: "Konstantego Ildefonsa Gałczyńskiego 7",
        image: "/image/coffee/wrzenie.jpg",
        description: `Tu spotkacie sławy literatury faktu i weźmiecie udział w inspirujących spotkaniach o ich nowych książkach czy projektach,
         obkupicie się prezentami dla domowej biblioteczki i zatopicie w fascynującej lekturze. I nikomu nie będzie przeszkadzało,
          że we wszystkich tych czynnościach będzie towarzyszyła wam filiżanka dobrze zaparzonego naparu. Nic tylko siedzieć,
           pożerać tonami mocną literaturę, popijając równie mocną kawą.
           W weekend warto spróbować brunchu w formie buffetu śniadaniowego`,
        facebook: "https://www.facebook.com/wrzenie/",
        loc_right: "55.5%",
        loc_top: "38%",
    },
    {
        name: "Stor",
        id: 4,
        type: "coffee",
        shortDescription: "Kawiarnia z dużym wyborem dobrej kawy, herbaty i akcesoriów do parzenia kawy",
        direction: "Tamka 33",
        image: "/image/coffee/stor.jpg",
        description: `Już z poziomu ulicy, kiedy zapuścimy zapoznawczego żurawia do wnętrza tej urokliwej kawiarni,
         widać, że wystrój sprzyja relaksowi, rozmyślaniu i posiadywaniu. Przestrzeń jest niewielka,
          lecz jakimś cudem odprężająco intymna. Są tu dostępne i alternatywy, i doprawdy solidne espresso.
           A jak wiadomo, skoro espresso na najwyższą notę, to nie zawiedzie też americano i nawet spod spienionego
            mleka latte wyczuje się przyzwoitą kawową nutę. Jeśli po dawce kofeiny przydybie was głód,
             koniecznie spróbujcie świeżego pieczywa z pasztetami od Podróbki.`,
        facebook: "https://www.facebook.com/storcafe/",
        loc_right: "62.5%",
        loc_top: "34%",
    },
    {
        name: "Coffeedesk",
        id: 5,
        type: "coffee",
        shortDescription: "Kawiarnia, sklep z kawą i akcesoriami oraz idealne miejsce spotkań.",
        direction: "Wilcza 42",
        image: "/image/coffee/coffeedesk.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.` +
            `Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.` +
            ` Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.`,
        facebook: "http://kawiarnia.coffeedesk.pl/",
        loc_right: "47%",
        loc_top: "67.5%",
    },
    {
        name: "Ministerstwo kawy",
        id: 6,
        type: "coffee",
        shortDescription: "Ministerstwo Kawy to kawa specialty z pysznymi wypiekami.",
        direction: "Marszałkowska 27/35",
        image: "/image/coffee/ministerstwo.png",
        description: `W tym Ministerstwie niepodzielną władzę dzierżą bariści, którzy codziennie szczodrze przelewają 
        dla przybyłych hektolitry świetnej kawy z uznanych palarni. Aeropress, drip, chemex i kalita, a może po prostu
         espresso, americano czy latte? Wszystkie wasze ulubione metody i rodzaje oraz dopasowane do nich ziarna,
          ciągle coś nowego, smakowa nuda nikomu nie grozi. Grozi natomiast rozwój kawowego uzależnienia 
          i konieczność poszerzania spodni, ciasta są kuszące`,
        facebook: "facebook.com/MinisterstwoKawy/",
        loc_right: "53.5%",
        loc_top: "83%",
    },
    {
        name: "Cafe Bristol",
        id: 7,
        type: "breakfast",
        shortDescription: "The legendary Viennese style café in the heart of Warsaw",
        direction: "Krakowskie Przedmieście 42/44",
        image: "/image/breakfast/cafeBristol.jpg",
        description: `Café Bristol is a legendary place, where tradition meets metropolitan lifestyle. Since 1901 the 
        Café has enchanted its guests with original Viennese-style interiors, tempted with aroma of freshly brewed 
        coffee and delighted with light, fresh dishes and sophisticated desserts, baked every day in our hotel bakery. 
        Its iconic atmosphere and enchanting moments happening in between cups of delicious coffee make Café Bristol 
        the beating heart of Hotel Bristol, Warsaw!`,
        facebook: "https://www.cafebristol.pl/",
        loc_right: "47.5%",
        loc_top: "18.5%",
    },
    {
        name: "Cream",
        id: 8,
        type: "breakfast",
        shortDescription: "No pain No vin",
        direction: "Śniadeckich 18",
        image: "/image/breakfast/cream.jpg",
        description: `Krem to bistro z prostą ale pełną smaków kuchnią francuską w doskonałym wydaniu i pięknym otoczeniu.
 Sałatki, kanapki o ciekawych kompozycjach oraz prawdziwe klasyki: croque madame, croque monsieur, pain perdu, raclette.  Koncept 
Kremu bazuje na typowej francuskiej crèmerie, a więc sklepiku z nabiałem i nie tylko. Tutaj ser i bagietka to podstawa.`,
        facebook: "https://www.facebook.com/kremwarszawa/",
        loc_right: "47%",
        loc_top: "78%",

    },
    {
        name: "Niezłe ziółko",
        id: 9,
        type: "breakfast",
        shortDescription: "Klimatyczne miejsce na wege śniadanie",
        direction: "Krucza 17",
        image: "/image/breakfast/ziolko.jpg",
        description: `Idealne miejsce na zdrowe śniadanie lub lunch. W karcie znajdziesz oryginalne połączenia smaków. 
        Otwarta kuchnia pozwala podglądać pracę kucharzy i cieszyć się zapachem świeżo wypiekanego pieczywa.`,
        facebook: "https://www.facebook.com/niezleziolko.warszawa/",
        loc_right: "54%",
        loc_top: "64.5%",
    },
    {
        name: "Charlotte",
        id: 10,
        type: "breakfast",
        shortDescription: "Chleb i wino.",
        direction: "Plac Zbawiciela",
        image: "/image/breakfast/charlotte.png",
        description: `Charlotte to prawdziwa boulangerie. Piekarze, wykorzystując własny zakwas 
        i stosując tylko naturalne składniki, pieką chleb w nocy, aby od rana był dostępny dla klientów. 
        W menu tartines przygotowywane na tutejszym chlebie, croissanty z czekoladami i konfiturami Charlotte,
         francuskie zapiekanki – croque, sałaty a także tarty owocowe, serniki, creme brulee i inne słodkości.
          Do tego francuskie wino, które najlepiej pasuje do tartines i innych specialites Charlotte takich 
          jak sery, francuskie charcuterie czy foie.`,
        facebook: "https://www.facebook.com/charlottezbawiciela/",
        loc_right: "54%",
        loc_top: "80%",
    },
    {
        name: "Menora. Charlotte",
        id: 11,
        type: "breakfast",
        shortDescription: "Piekarnia i kawiarnia o tradycjach żydowskich na Pl. Grzybowskim.",
        direction: "Plac Grzybowski 2",
        image: "/image/breakfast/charlotte_mennora.jpg",
        description: `Młodsza siostra Charlotte z Placu Zbawiciela zamieszkała wraz z infopunktem Muzeum POLIN na
         pięknym i historycznym Placu Grzybowskim w lokalu po żydowskiej restauracji Menora. W związku z tym,
          oprócz stałego menu każdej Charlotte, znajdziecie tu również tradycyjne żydowskie wypieki,
           przekąski i dania, jak gęsie pipki czy placuszki latkes.`,
        facebook: "https://www.facebook.com/charlottemenora/",
        loc_right: "35%",
        loc_top: "36.5%",
    },
    {
        name: "Vincent Cafe & Bakery",
        id: 12,
        type: "breakfast",
        shortDescription: "Francuskie specjały: croissants, pain au chocolat, lunett’choco..",
        direction: "Nowy Świat 64",
        image: "/image/breakfast/vincent.jpg",
        description: 'Vincent Boulangerie Patisserie to o piekarnia, a także cukiernia i bistro oferujące niepowtarzalne ' +
            'francuskie pieczywo i wyroby cukiernicze. Najstarszy z lokali warszawkich usytuowany na trakcie królewskim, polecam ' +
            'na spacer Nowym Światem i odpoczynek w Cafe Vincent. Siedzenie w kawiarnianym ogródku na krzesłach odwróconych po parysku (rzecz jasna!) ' +
            'w kierunku ulicy, pozwala na obserwację naszej polskiej-europejskiej rzeczywistości i mody.',
        facebook: "",
        loc_right: "54.5%",
        loc_top: "40%",
    },
    {
        name: "Karma Coffee",
        id: 13,
        type: "breakfast",
        shortDescription: `Kawa i śniadanie w najbardziej urokliwym miejscu: na Placu Zbawiciela`,
        direction: "Mokotowska 17",
        image: "/image/coffee/karma.jpg",
        description: 'Coffee Karma powstała w 2002 roku. To pierwsza w Warszawie kawiarnia która może się pochwalić wypalaną na miejscu, świeżą kawą. ' +
            'Znajduje się w jednym z najbardziej urokliwych, a jednocześnie kultowych miejsc na mapie stolicy: na Placu Zbawiciela. ' +
            `Kawa w ogródku kawiarnianym z widokiem na pędzące tramwaje i uroczy plac Zbawiciela to "must do" pobytu w Warszawie` +
            ' Specjalnością Coffee Karma jest świeżo palona kawa z wyselekcjonowanych krajów świata, wypalana w pięknym  piecu Probat L5, wyekponowanym w centralnym miejscu kawiarni' +
            ' Życie kawiarniane Karmy jest mocno związane z kulturą. Każdego miesiąca prezentuje się tu pracę różnorodnych artystów. ' +
            'Są to zarówno koncerty, jak i wieczory poetyckie i wernisaże',
        facebook: "https://www.facebook.com/coffeekarma.warszawa/",
        loc_right: "52%",
        loc_top: "81%",
    },
    {
        name: "Ale Wino",
        id: 14,
        type: "food",
        shortDescription: "A simple idea to combine the best wines & delicious food",
        direction: "Mokotowska 48",
        image: "/image/food/alewino.jpg",
        description: 'Restauracja schowana jest w niepozornej oficynie przy Mokotowskiej, tuż pod butikiem z ciuchami Kupisza. ' +
            'Wejście znajduje się w jednym z najpiękniejszych letnich ogródków w stolicy. Restauracja AleWino serwuje zmieniające' +
            ' się wraz z porami roku dania oparte na lokalnych i sezonowych składnikach. Robi to od lat nieustająco dobrze.',
        facebook: "http://alewino.pl/en",
        loc_right: "58.5%",
        loc_top: "66%",
    },
    {
        name: "Bibenda",
        id: 16,
        type: "food",
        shortDescription: "Świętowaniem jedzenia i picia w gronie przyjaciół",
        direction: "Nowogrodzka 10",
        image: "/image/food/bibenda.jpg",
        description: `Bibenda jest świętowaniem jedzenia i picia. Czeka na Was wybór autorskich dań,
         których możecie próbować z lokalnymi piwami, dobrym winem, koktajlami albo czymś mocniejszym. 
         Bibenda gotuje uczciwie, tylko z najświeższych, sezonowych produktów. Podajemy potrawy pełne smaku,
          takie które sami lubimy gotować i jeść. Bibenda to dzielenie się jedzeniem i wspólnie spędzanym czasem.`,
        facebook: "https://www.facebook.com/bibendanowogrodzka10/",
        loc_right: "50%",
        loc_top: "53.5%",
    },
    {
        name: "Kieliszki na Próżnej",
        id: 17,
        type: "food",
        shortDescription: "Wine kitchen & fine dinning",
        direction: "Próżna 12",
        image: "/image/food/kieliszki.jpg",
        description: `Kieliszki na Próżnej to wine kitchen – miejsce, w którym znajdziecie idealną równowagę między 
        tym co w kieliszku, a tym, co na talerzu. 
        We wnętrzu restauracji dominuje niesamowita dekoracja, zdobiąca bar ponad tysiącem kieliszków,` +
            ` jest niemal tak samo zachwycająca jak nadzwyczajny wybór win. W dodatku wszystkie dostępne` +
            ` są na kieliszki! ` +
            `Na uwagę zasługuje także menu, zaprojektowane fachowo by podkreślać smakowe` +
            ` niuanse szlachetnych trunków.`,
        facebook: "https://www.facebook.com/KieliszkinaProznej/",
        loc_right: "35%",
        loc_top: "34.5%",
    },
    {
        name: "Eden",
        id: 18,
        type: "food",
        shortDescription: "Down-to-earth bistro with a leafy terrace.",
        direction: "Jakubowska 16",
        image: "/image/food/eden.jpg",
        description: `Bistro Eden to wegańskie miejsce, gdzie szefem kuchni jest Michał Gniłka. Bistro Eden mieści się 
        w modernistycznym Domu Funkcjonalnym na saskiej Kępie. W tutejszej szklarni w ogrodzie zrobić kwiatowe zakupy. 
        Napijemy się tu dobrej kawy – parzonej klasycznie i alternatywnie. Na śniadanie zjemy tu kokosową owsiankę 
        z karmelizowanym bananem, słonym karmelem i pekanami lub domowe Muesli / granolę na mleku roślinnym.
         W menu głównym są m.in. grzanka z pate grzybowym, ceviche z grillowanej kukurydzy, laksa z rokitnikiem,
          tacos z boczniakami z grilla, eryngi a’la przegrzebki na polencie ze świeżej kukurydzy. 
          A na deser zjeść można czekoladowy crème brulee lub lody waniliowe z czerwonym pieprzem, solonym karmelem i marakują. 
        Wszystko podane jest w ceramice autorstwa młodych polskich ceramików, którą można tu kupić.`,
        facebook: "https://www.facebook.com/eden.bistroo/",
        loc_right: "94%",
        loc_top: "34%",
    },
    {
        name: "Hala Koszyki",
        id: 19,
        type: "food",
        shortDescription: "Historic market and food hall",
        direction: "Koszykowa 63",
        image: "/image/food/koszyki.jpg",
        description: `Jesienią 2016 roku Hala wróciła do Warszawy jako wyjątkowy punkt towarzyski i kulinarny,
         gdzie można zjeść na miejscu w kilkunastu restauracjach i barach lub kupić produkty spożywcze do domu.
          Dzięki Hali Koszyki Warszawa dołączyła do grona największych światowych metropolii takich jak Nowy Jork,
           Londyn, Oslo, Rotterdam czy Florencja, gdzie w Halach targowo-restauracyjnych pod jednym dachem tętni
            życie i spotykają się smaki z całego świata.`,
        facebook: "https://www.facebook.com/HalaKoszyki/",
        loc_right: "44%",
        loc_top: "74%",
    },
    {
        name: "Pizzaiolo",
        id: 20,
        type: "food",
        shortDescription: "Neapolitańska pizeria w centrum Warszawy",
        direction: "Krucza 16/22",
        image: "/image/food/Pizzaiolo.jpg",
        description: `Miejsce specjalizuje się w pizzy neapolitańskiej. 
        W menu znajdziemy 15 propozycji – między innymi klasyczną Margheritę,
         pizzę z salami piccante, anchovies, czy z wędzonym serem provola, 
         ziemniakami i nadują lub ziemniakiem i jackfruitem oraz szpinakiem i pancettą.
          Są także pozycje wegańskie, takie jak Marinara czy Cetarese Vegan.`,
        facebook: "https://www.facebook.com/pizzaiolo.krucza/",
        loc_right: "54.5%",
        loc_top: "63%",
    },
];

export function getPlaces() {
    return places;
}

export function getPlace(id) {
    return places.find(
        place => place.id === id
    );
}
