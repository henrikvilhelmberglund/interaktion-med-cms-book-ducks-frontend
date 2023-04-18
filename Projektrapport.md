# Projektrapport (VG) Henrik Berglund FEND22

## Vilka är Strapi CMS främsta styrkor?

Det beror lite på hur man tänker på det. Om du frågar mig personligen:

> Open Source

Eftersom Strapi är helt open source kan man enkelt hosta det själv. Det finns en community som hjälper att bidra med kod genom pull requests eller plugins för att ge mer funktionalitet inom Strapi. Om man behöver en viss speciell feature kan man troligen lägga till den själv eftersom man har tillgång till all kod.

> 100% JS

För mig är det bra att Strapi är 100% javascript för det är det jag kan bäst. Istället för att blanda olika språk tycker jag det är vettigt att allt är gjort i samma så att det blir mer konsekvent och enklare att använda.

> Enkelt att använda för att vara headless CMS

Det här är den allra främsta styrkan för mig. När man har lärt sig om permissions och olika content types är det väldigt enkelt att använda och man kan enkelt skapa ett vettigt REST-api väldigt snabbt.

## Vilka är Strapi CMS svagheter?

Det tog ganska lång tid att skapa nya projekt men det kanske är så för de flesta CMS. Det var inte alltid självklart vilka relationer man skulle ha/hur de fungerade, det kanske hade varit möjligt att ha något exempel i UI:t som gjorde det lättare att lära sig.

En sak jag störde mig på ordentligt var att /users/-routen hade en annan respons jämfört med alla andra så när jag kollade relations i t.ex /me/ fick jag ha en annan funktion för att få rätt data. När jag jämförde data med t.ex /books/ och /me/ratings/books/ fick jag tänka på att /books/ hade data och den andra inte hade det. Mer info här: https://github.com/strapi/strapi/issues/12280 (har varit buggat i över ett år)

Den sista är att man inte kan hosta Strapi gratis online hos dem utan man får antingen hosta själv på en dator eller betala för att hosta någonstans, t.ex Render.

## Vad hade varit orsaker att använda ett annat CMS än Strapi i detta projekt, och vilka CMS du hade kunnat använda dig av istället? Ge minst tre exempel. (T.ex Exempel 1:"Om jag hade velat utöka projektet med X funktionalitet, hade CMS Y lämpat sig bättre p.g.a inbyggda funktionalitet etc.")?

> Gratis hosting

Om jag ville ha gratis hosting kunde jag använda [Prismic](https://prismic.io/) eller [Sanity](https://www.sanity.io/). Dessa har gratis hosting med rätt generösa begränsningar. Problemet är att de har helt andra APIs och inställningar än Strapi. Jag provade Prismic lite i början av kursen och det fungerade bra! [Litet exempel](https://interaktion-med-cms-prismic.prismic.io/api/v2)

Strapi har inte gratis hosting utan man får hosta med någon tjänst som t.ex Heroku, AWS eller Render. Det är inte jättedyrt om man inte har så höga krav men lite störande. Däremot läste jag på Strapis hemsida att de planerade att fixa ett free tier i andra delen av 2023! 🤯

> Vill inte koda

Om jag inte kände mig för att koda (eller ville hjälpa någon jag känner att fixa en enklare webbsida) kunde jag istället för ett Headless CMS som Strapi och de jag nämnde ovan istället använda t.ex [Wordpress](https://wordpress.org/) som är ett traditionellt CMS. Då slipper man göra en frontend utan får den på köpet istället. Fördelen är att det är en mer komplett lösning från början men nackdelen är att det inte är lika flexibelt som om man gjorde en egen frontend med egen funktionalitet. Wordpress kan också vara rätt långsamt prestandamässigt.

> Hade kund som ville ha något mer fancy

Strapi är egentligen ganska basic. Man skulle kunna tänka sig att man hade något enormt företag som kund som hade mycket pengar men också många krav. Då skulle ett CMS som [Optimizely](https://www.optimizely.com/) kunna vara ett alternativ. Det har mycket mer inbyggd funktionalitet än Strapi men kostar mycket mer (de har inte ens priser listade på webbsidan).

Generellt dock var Strapi väldigt bra för just det här projektet, det var enkelt att använda och gick bra att hosta lokalt iallafall.

## Hur har din erfarenhet varit med att jobba med Strapi i detta projekt?

Den har varit bra! Jag störde mig på vissa saker som t.ex buggen jag nämnde ovan och UX ibland, back-knappen var väldigt långt borta ibland och ibland ändrade jag på samma content istället för att lägga till nya.

Förutom det har det fungerat bra. Det var rätt enkelt att experimentera med content types tills man fick något som fungerade och REST-apit var enkelt att förstå. Jag använde inga plugins den här gången så vissa länkar blev lite långa men det fungerade.

Det enda jag tycker är tråkigt är att det inte är så enkelt att hosta online någonstans så det blir lite svårare att showa off det man har skapat. Vissa andra i klassen är också intresserade av att hosta online.

Jag gillar dock Strapi och det var kul att prova på att använda!
