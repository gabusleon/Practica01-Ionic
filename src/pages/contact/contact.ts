import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
//si da error por tipos de datos, se debe agregar nombre_variable  ': any'
  verMasculinos = true;
  verFemeninos = true;
  cadenaBusqueda = "";
  datos : any = [{"id":1,"first_name":"Giulietta","last_name":"Vaney","email":"gvaney0@mlb.com","gender":"Female","avatar":"https://robohash.org/excepturioditesse.png?size=50x50&set=set1"},
{"id":2,"first_name":"Kinsley","last_name":"Syder","email":"ksyder1@vk.com","gender":"Male","avatar":"https://robohash.org/doloremrerumut.png?size=50x50&set=set1"},
{"id":3,"first_name":"Tabina","last_name":"Deble","email":"tdeble2@state.tx.us","gender":"Female","avatar":"https://robohash.org/consequaturcorporisvoluptates.jpg?size=50x50&set=set1"},
{"id":4,"first_name":"Sancho","last_name":"Burchfield","email":"sburchfield3@marketwatch.com","gender":"Male","avatar":"https://robohash.org/molestiaesuntin.png?size=50x50&set=set1"},
{"id":5,"first_name":"Clem","last_name":"Semble","email":"csemble4@simplemachines.org","gender":"Male","avatar":"https://robohash.org/nostrumillosaepe.png?size=50x50&set=set1"},
{"id":6,"first_name":"Reube","last_name":"McSaul","email":"rmcsaul5@surveymonkey.com","gender":"Male","avatar":"https://robohash.org/etetcupiditate.png?size=50x50&set=set1"},
{"id":7,"first_name":"Winna","last_name":"Carff","email":"wcarff6@howstuffworks.com","gender":"Female","avatar":"https://robohash.org/etinciduntdolorem.bmp?size=50x50&set=set1"},
{"id":8,"first_name":"Corie","last_name":"Friedank","email":"cfriedank7@aboutads.info","gender":"Female","avatar":"https://robohash.org/eumveniamrecusandae.png?size=50x50&set=set1"},
{"id":9,"first_name":"Deonne","last_name":"Akers","email":"dakers8@furl.net","gender":"Female","avatar":"https://robohash.org/fugitprovidentquaerat.png?size=50x50&set=set1"},
{"id":10,"first_name":"Blaire","last_name":"Lob","email":"blob9@bigcartel.com","gender":"Female","avatar":"https://robohash.org/vitaenemodolores.png?size=50x50&set=set1"},
{"id":11,"first_name":"Emmery","last_name":"Matis","email":"ematisa@google.fr","gender":"Male","avatar":"https://robohash.org/quivoluptatemlibero.png?size=50x50&set=set1"},
{"id":12,"first_name":"Jethro","last_name":"Gilman","email":"jgilmanb@seattletimes.com","gender":"Male","avatar":"https://robohash.org/nesciuntvelaut.jpg?size=50x50&set=set1"},
{"id":13,"first_name":"Clyde","last_name":"Hubbucks","email":"chubbucksc@pinterest.com","gender":"Male","avatar":"https://robohash.org/quivoluptasquo.jpg?size=50x50&set=set1"},
{"id":14,"first_name":"Caleb","last_name":"Trahmel","email":"ctrahmeld@dropbox.com","gender":"Male","avatar":"https://robohash.org/ettemporarecusandae.jpg?size=50x50&set=set1"},
{"id":15,"first_name":"Vladimir","last_name":"Slite","email":"vslitee@ezinearticles.com","gender":"Male","avatar":"https://robohash.org/facilisquamvoluptatem.png?size=50x50&set=set1"},
{"id":16,"first_name":"Halette","last_name":"Rosewell","email":"hrosewellf@walmart.com","gender":"Female","avatar":"https://robohash.org/sedeumvoluptatem.png?size=50x50&set=set1"},
{"id":17,"first_name":"Shaylyn","last_name":"Stoyell","email":"sstoyellg@sciencedaily.com","gender":"Female","avatar":"https://robohash.org/illumquoesse.png?size=50x50&set=set1"},
{"id":18,"first_name":"Templeton","last_name":"Worham","email":"tworhamh@newyorker.com","gender":"Male","avatar":"https://robohash.org/exercitationemeossequi.png?size=50x50&set=set1"},
{"id":19,"first_name":"Concettina","last_name":"Pezey","email":"cpezeyi@howstuffworks.com","gender":"Female","avatar":"https://robohash.org/idnobisimpedit.jpg?size=50x50&set=set1"},
{"id":20,"first_name":"Nell","last_name":"Pickerin","email":"npickerinj@studiopress.com","gender":"Female","avatar":"https://robohash.org/iustoexplicaboet.bmp?size=50x50&set=set1"},
{"id":21,"first_name":"Wenona","last_name":"Preddle","email":"wpreddlek@fema.gov","gender":"Female","avatar":"https://robohash.org/nullasita.png?size=50x50&set=set1"},
{"id":22,"first_name":"Brena","last_name":"Moncreiff","email":"bmoncreiffl@cornell.edu","gender":"Female","avatar":"https://robohash.org/inventoresedaut.jpg?size=50x50&set=set1"},
{"id":23,"first_name":"Mommy","last_name":"Hugland","email":"mhuglandm@ning.com","gender":"Female","avatar":"https://robohash.org/doloremqueperspiciatissequi.bmp?size=50x50&set=set1"},
{"id":24,"first_name":"Nataline","last_name":"Isaq","email":"nisaqn@fc2.com","gender":"Female","avatar":"https://robohash.org/ipsumipsanumquam.png?size=50x50&set=set1"},
{"id":25,"first_name":"Clarisse","last_name":"Scatchard","email":"cscatchardo@boston.com","gender":"Female","avatar":"https://robohash.org/officiisexplicabovoluptatum.jpg?size=50x50&set=set1"},
{"id":26,"first_name":"Trever","last_name":"Lodwig","email":"tlodwigp@businessweek.com","gender":"Male","avatar":"https://robohash.org/animidolorcum.png?size=50x50&set=set1"},
{"id":27,"first_name":"Morry","last_name":"Sissel","email":"msisselq@marriott.com","gender":"Male","avatar":"https://robohash.org/similiquedolorumeos.bmp?size=50x50&set=set1"},
{"id":28,"first_name":"Beilul","last_name":"Pinard","email":"bpinardr@disqus.com","gender":"Female","avatar":"https://robohash.org/quidemoccaecativoluptatem.jpg?size=50x50&set=set1"},
{"id":29,"first_name":"Rod","last_name":"Cavozzi","email":"rcavozzis@fotki.com","gender":"Male","avatar":"https://robohash.org/quiaperspiciatisvero.png?size=50x50&set=set1"},
{"id":30,"first_name":"Roby","last_name":"Corzon","email":"rcorzont@ezinearticles.com","gender":"Female","avatar":"https://robohash.org/quiailloincidunt.jpg?size=50x50&set=set1"},
{"id":31,"first_name":"Arney","last_name":"Bowdidge","email":"abowdidgeu@flavors.me","gender":"Male","avatar":"https://robohash.org/remtemporeiusto.bmp?size=50x50&set=set1"},
{"id":32,"first_name":"Garey","last_name":"Dalziell","email":"gdalziellv@qq.com","gender":"Male","avatar":"https://robohash.org/accusamusquodmolestiae.png?size=50x50&set=set1"},
{"id":33,"first_name":"Karlik","last_name":"Fayne","email":"kfaynew@vinaora.com","gender":"Male","avatar":"https://robohash.org/omnisdictaqui.jpg?size=50x50&set=set1"},
{"id":34,"first_name":"Odell","last_name":"Van Hove","email":"ovanhovex@huffingtonpost.com","gender":"Male","avatar":"https://robohash.org/nonomniset.jpg?size=50x50&set=set1"},
{"id":35,"first_name":"Waly","last_name":"Lawlan","email":"wlawlany@mapquest.com","gender":"Female","avatar":"https://robohash.org/doloribusfugitaut.jpg?size=50x50&set=set1"},
{"id":36,"first_name":"Andriana","last_name":"Francesco","email":"afrancescoz@blogspot.com","gender":"Female","avatar":"https://robohash.org/etnihilcupiditate.jpg?size=50x50&set=set1"},
{"id":37,"first_name":"Skippie","last_name":"Shafe","email":"sshafe10@shutterfly.com","gender":"Male","avatar":"https://robohash.org/utetdoloribus.bmp?size=50x50&set=set1"},
{"id":38,"first_name":"Hartwell","last_name":"Kerrey","email":"hkerrey11@drupal.org","gender":"Male","avatar":"https://robohash.org/eiusestest.bmp?size=50x50&set=set1"},
{"id":39,"first_name":"Richy","last_name":"Scolding","email":"rscolding12@ibm.com","gender":"Male","avatar":"https://robohash.org/exercitationemoditconsequatur.bmp?size=50x50&set=set1"},
{"id":40,"first_name":"Cecilia","last_name":"Tabord","email":"ctabord13@rakuten.co.jp","gender":"Female","avatar":"https://robohash.org/repellatidquo.png?size=50x50&set=set1"},
{"id":41,"first_name":"Hedda","last_name":"Stockney","email":"hstockney14@webmd.com","gender":"Female","avatar":"https://robohash.org/temporeutvoluptatem.png?size=50x50&set=set1"},
{"id":42,"first_name":"Marji","last_name":"Sumbler","email":"msumbler15@intel.com","gender":"Female","avatar":"https://robohash.org/velitrerumcumque.png?size=50x50&set=set1"},
{"id":43,"first_name":"Lazar","last_name":"Freeborn","email":"lfreeborn16@webeden.co.uk","gender":"Male","avatar":"https://robohash.org/errorveroprovident.bmp?size=50x50&set=set1"},
{"id":44,"first_name":"Stormie","last_name":"Fatscher","email":"sfatscher17@salon.com","gender":"Female","avatar":"https://robohash.org/innumquamrem.bmp?size=50x50&set=set1"},
{"id":45,"first_name":"Beverly","last_name":"Merkel","email":"bmerkel18@purevolume.com","gender":"Female","avatar":"https://robohash.org/illumdoloremdolorem.bmp?size=50x50&set=set1"},
{"id":46,"first_name":"Pasquale","last_name":"De Bischof","email":"pdebischof19@ezinearticles.com","gender":"Male","avatar":"https://robohash.org/exercitationemquianam.jpg?size=50x50&set=set1"},
{"id":47,"first_name":"Brew","last_name":"Canfield","email":"bcanfield1a@over-blog.com","gender":"Male","avatar":"https://robohash.org/quaerateaqueesse.jpg?size=50x50&set=set1"},
{"id":48,"first_name":"Hughie","last_name":"Pavkovic","email":"hpavkovic1b@godaddy.com","gender":"Male","avatar":"https://robohash.org/voluptatumrerumvel.png?size=50x50&set=set1"},
{"id":49,"first_name":"Michele","last_name":"Cran","email":"mcran1c@guardian.co.uk","gender":"Male","avatar":"https://robohash.org/maximealiquidodio.png?size=50x50&set=set1"},
{"id":50,"first_name":"Jonathan","last_name":"Chrippes","email":"jchrippes1d@issuu.com","gender":"Male","avatar":"https://robohash.org/sitpossimuseligendi.png?size=50x50&set=set1"},
{"id":51,"first_name":"Kelwin","last_name":"Chung","email":"kchung1e@netscape.com","gender":"Male","avatar":"https://robohash.org/harumdebitisodit.jpg?size=50x50&set=set1"},
{"id":52,"first_name":"Dolly","last_name":"Peppin","email":"dpeppin1f@amazon.com","gender":"Female","avatar":"https://robohash.org/quiplaceatiure.png?size=50x50&set=set1"},
{"id":53,"first_name":"Skipper","last_name":"Leidl","email":"sleidl1g@reverbnation.com","gender":"Male","avatar":"https://robohash.org/solutavitaeenim.png?size=50x50&set=set1"},
{"id":54,"first_name":"Corenda","last_name":"O'Flaverty","email":"coflaverty1h@intel.com","gender":"Female","avatar":"https://robohash.org/inciduntarchitectofugit.jpg?size=50x50&set=set1"},
{"id":55,"first_name":"Afton","last_name":"Pack","email":"apack1i@wufoo.com","gender":"Female","avatar":"https://robohash.org/omnisbeataemagnam.png?size=50x50&set=set1"},
{"id":56,"first_name":"Jory","last_name":"Gerckens","email":"jgerckens1j@adobe.com","gender":"Male","avatar":"https://robohash.org/nisimolestiaetemporibus.jpg?size=50x50&set=set1"},
{"id":57,"first_name":"Karylin","last_name":"Beadman","email":"kbeadman1k@aboutads.info","gender":"Female","avatar":"https://robohash.org/officiisfacereaut.jpg?size=50x50&set=set1"},
{"id":58,"first_name":"Brnaba","last_name":"Alben","email":"balben1l@google.de","gender":"Male","avatar":"https://robohash.org/etquianesciunt.jpg?size=50x50&set=set1"},
{"id":59,"first_name":"Linn","last_name":"Davidowich","email":"ldavidowich1m@answers.com","gender":"Male","avatar":"https://robohash.org/quiearumquaerat.png?size=50x50&set=set1"},
{"id":60,"first_name":"Irwin","last_name":"Flacke","email":"iflacke1n@cdbaby.com","gender":"Male","avatar":"https://robohash.org/sitsinta.jpg?size=50x50&set=set1"},
{"id":61,"first_name":"Maria","last_name":"Wabb","email":"mwabb1o@washington.edu","gender":"Female","avatar":"https://robohash.org/sitvoluptasdolorem.bmp?size=50x50&set=set1"},
{"id":62,"first_name":"Valentino","last_name":"Ber","email":"vber1p@freewebs.com","gender":"Male","avatar":"https://robohash.org/velitquiaunde.jpg?size=50x50&set=set1"},
{"id":63,"first_name":"Thaddeus","last_name":"Trott","email":"ttrott1q@gnu.org","gender":"Male","avatar":"https://robohash.org/essevoluptatemaliquam.jpg?size=50x50&set=set1"},
{"id":64,"first_name":"Ardeen","last_name":"MacLese","email":"amaclese1r@whitehouse.gov","gender":"Female","avatar":"https://robohash.org/consequaturtemporedolore.png?size=50x50&set=set1"},
{"id":65,"first_name":"Amii","last_name":"Wiggans","email":"awiggans1s@smh.com.au","gender":"Female","avatar":"https://robohash.org/accusantiumvoluptatefugit.bmp?size=50x50&set=set1"},
{"id":66,"first_name":"Verney","last_name":"Malia","email":"vmalia1t@baidu.com","gender":"Male","avatar":"https://robohash.org/liberobeataenatus.png?size=50x50&set=set1"},
{"id":67,"first_name":"Colleen","last_name":"Pollitt","email":"cpollitt1u@cbslocal.com","gender":"Female","avatar":"https://robohash.org/utidcorporis.jpg?size=50x50&set=set1"},
{"id":68,"first_name":"Frans","last_name":"Dearle","email":"fdearle1v@ifeng.com","gender":"Male","avatar":"https://robohash.org/estautemnesciunt.jpg?size=50x50&set=set1"},
{"id":69,"first_name":"Hal","last_name":"Pattle","email":"hpattle1w@list-manage.com","gender":"Male","avatar":"https://robohash.org/veroquibusdamconsectetur.jpg?size=50x50&set=set1"},
{"id":70,"first_name":"Karita","last_name":"Gomby","email":"kgomby1x@cnet.com","gender":"Female","avatar":"https://robohash.org/eosautipsum.png?size=50x50&set=set1"},
{"id":71,"first_name":"Tiler","last_name":"Klaggeman","email":"tklaggeman1y@pinterest.com","gender":"Male","avatar":"https://robohash.org/laborumvoluptasnemo.png?size=50x50&set=set1"},
{"id":72,"first_name":"Faustina","last_name":"Esposita","email":"fesposita1z@google.it","gender":"Female","avatar":"https://robohash.org/nihilminimacupiditate.png?size=50x50&set=set1"},
{"id":73,"first_name":"Vinnie","last_name":"Chree","email":"vchree20@businessinsider.com","gender":"Female","avatar":"https://robohash.org/providentmollitiaquia.jpg?size=50x50&set=set1"},
{"id":74,"first_name":"Kania","last_name":"McCroft","email":"kmccroft21@storify.com","gender":"Female","avatar":"https://robohash.org/inciduntnoncumque.jpg?size=50x50&set=set1"},
{"id":75,"first_name":"Kirbee","last_name":"Tredget","email":"ktredget22@hatena.ne.jp","gender":"Female","avatar":"https://robohash.org/illovoluptatumiusto.bmp?size=50x50&set=set1"},
{"id":76,"first_name":"Benita","last_name":"Audsley","email":"baudsley23@hao123.com","gender":"Female","avatar":"https://robohash.org/itaquealiasbeatae.png?size=50x50&set=set1"},
{"id":77,"first_name":"Myrtle","last_name":"Chiene","email":"mchiene24@de.vu","gender":"Female","avatar":"https://robohash.org/velitvoluptateaccusamus.jpg?size=50x50&set=set1"},
{"id":78,"first_name":"Rogerio","last_name":"Moncarr","email":"rmoncarr25@ifeng.com","gender":"Male","avatar":"https://robohash.org/liberoinciduntvitae.jpg?size=50x50&set=set1"},
{"id":79,"first_name":"Ame","last_name":"MacFall","email":"amacfall26@sun.com","gender":"Female","avatar":"https://robohash.org/quiaerrorearum.bmp?size=50x50&set=set1"},
{"id":80,"first_name":"Boonie","last_name":"Kondratenya","email":"bkondratenya27@addtoany.com","gender":"Male","avatar":"https://robohash.org/etdoloribusvero.png?size=50x50&set=set1"},
{"id":81,"first_name":"Melesa","last_name":"Jennaway","email":"mjennaway28@comsenz.com","gender":"Female","avatar":"https://robohash.org/nemoinventoreipsum.jpg?size=50x50&set=set1"},
{"id":82,"first_name":"Maryjo","last_name":"Gatchell","email":"mgatchell29@ucoz.com","gender":"Female","avatar":"https://robohash.org/sedautporro.jpg?size=50x50&set=set1"},
{"id":83,"first_name":"Essy","last_name":"Waulker","email":"ewaulker2a@xrea.com","gender":"Female","avatar":"https://robohash.org/rerumfugiatsint.bmp?size=50x50&set=set1"},
{"id":84,"first_name":"Wolf","last_name":"Veevers","email":"wveevers2b@state.gov","gender":"Male","avatar":"https://robohash.org/aperiametatque.png?size=50x50&set=set1"},
{"id":85,"first_name":"Ruthann","last_name":"Cousens","email":"rcousens2c@drupal.org","gender":"Female","avatar":"https://robohash.org/expeditanatusquas.jpg?size=50x50&set=set1"},
{"id":86,"first_name":"Gerry","last_name":"Capaldo","email":"gcapaldo2d@newyorker.com","gender":"Female","avatar":"https://robohash.org/omnisvelitmollitia.png?size=50x50&set=set1"},
{"id":87,"first_name":"Keven","last_name":"Raleston","email":"kraleston2e@nifty.com","gender":"Male","avatar":"https://robohash.org/etvoluptatumquo.png?size=50x50&set=set1"},
{"id":88,"first_name":"Crissie","last_name":"Daniel","email":"cdaniel2f@xrea.com","gender":"Female","avatar":"https://robohash.org/molestiaelaboriosamunde.png?size=50x50&set=set1"},
{"id":89,"first_name":"Erv","last_name":"Eustanch","email":"eeustanch2g@zdnet.com","gender":"Male","avatar":"https://robohash.org/excepturirepellatsit.png?size=50x50&set=set1"},
{"id":90,"first_name":"Deanna","last_name":"Birney","email":"dbirney2h@zimbio.com","gender":"Female","avatar":"https://robohash.org/temporaquamnisi.jpg?size=50x50&set=set1"},
{"id":91,"first_name":"Jessie","last_name":"Byron","email":"jbyron2i@pagesperso-orange.fr","gender":"Female","avatar":"https://robohash.org/molestiasenimvoluptatem.bmp?size=50x50&set=set1"},
{"id":92,"first_name":"Yanaton","last_name":"Oleshunin","email":"yoleshunin2j@hao123.com","gender":"Male","avatar":"https://robohash.org/doloremqueestquia.jpg?size=50x50&set=set1"},
{"id":93,"first_name":"Robbert","last_name":"Gives","email":"rgives2k@ox.ac.uk","gender":"Male","avatar":"https://robohash.org/maioresasperioresquos.jpg?size=50x50&set=set1"},
{"id":94,"first_name":"Giulio","last_name":"Mitrovic","email":"gmitrovic2l@yandex.ru","gender":"Male","avatar":"https://robohash.org/nonautvelit.png?size=50x50&set=set1"},
{"id":95,"first_name":"Wini","last_name":"Marrion","email":"wmarrion2m@imgur.com","gender":"Female","avatar":"https://robohash.org/easolutareprehenderit.png?size=50x50&set=set1"},
{"id":96,"first_name":"Isidro","last_name":"Turneaux","email":"iturneaux2n@patch.com","gender":"Male","avatar":"https://robohash.org/utquisducimus.jpg?size=50x50&set=set1"},
{"id":97,"first_name":"Salli","last_name":"Grebert","email":"sgrebert2o@paginegialle.it","gender":"Female","avatar":"https://robohash.org/voluptaspariaturfacilis.png?size=50x50&set=set1"},
{"id":98,"first_name":"Cecilio","last_name":"Brawson","email":"cbrawson2p@google.pl","gender":"Male","avatar":"https://robohash.org/liberorepellatquam.png?size=50x50&set=set1"},
{"id":99,"first_name":"Keelby","last_name":"Ateggart","email":"kateggart2q@imageshack.us","gender":"Male","avatar":"https://robohash.org/illummagnivoluptatem.jpg?size=50x50&set=set1"},
{"id":100,"first_name":"Gabbie","last_name":"Pichan","email":"gpichan2r@nationalgeographic.com","gender":"Female","avatar":"https://robohash.org/minuscorruptiut.png?size=50x50&set=set1"},
{"id":101,"first_name":"Harbert","last_name":"Bertouloume","email":"hbertouloume2s@toplist.cz","gender":"Male","avatar":"https://robohash.org/suscipitquiipsam.jpg?size=50x50&set=set1"},
{"id":102,"first_name":"Hi","last_name":"Brogan","email":"hbrogan2t@facebook.com","gender":"Male","avatar":"https://robohash.org/autestpossimus.png?size=50x50&set=set1"},
{"id":103,"first_name":"Annecorinne","last_name":"Mytton","email":"amytton2u@cam.ac.uk","gender":"Female","avatar":"https://robohash.org/delenitiameta.jpg?size=50x50&set=set1"},
{"id":104,"first_name":"Lazar","last_name":"Peet","email":"lpeet2v@apache.org","gender":"Male","avatar":"https://robohash.org/providentmaximeeius.bmp?size=50x50&set=set1"},
{"id":105,"first_name":"Rolph","last_name":"Dalgarno","email":"rdalgarno2w@icio.us","gender":"Male","avatar":"https://robohash.org/etveniamnon.png?size=50x50&set=set1"},
{"id":106,"first_name":"Davon","last_name":"Batter","email":"dbatter2x@constantcontact.com","gender":"Male","avatar":"https://robohash.org/magniesterror.png?size=50x50&set=set1"},
{"id":107,"first_name":"Jasun","last_name":"Frome","email":"jfrome2y@paypal.com","gender":"Male","avatar":"https://robohash.org/praesentiumcumqueaccusamus.bmp?size=50x50&set=set1"},
{"id":108,"first_name":"Lindi","last_name":"Reddie","email":"lreddie2z@reverbnation.com","gender":"Female","avatar":"https://robohash.org/autdoloraccusamus.png?size=50x50&set=set1"},
{"id":109,"first_name":"Jeromy","last_name":"Allwood","email":"jallwood30@nature.com","gender":"Male","avatar":"https://robohash.org/estexercitationemcumque.jpg?size=50x50&set=set1"},
{"id":110,"first_name":"Estella","last_name":"Matlock","email":"ematlock31@merriam-webster.com","gender":"Female","avatar":"https://robohash.org/animiquodsuscipit.bmp?size=50x50&set=set1"},
{"id":111,"first_name":"Tymon","last_name":"Novill","email":"tnovill32@indiatimes.com","gender":"Male","avatar":"https://robohash.org/adaspernaturut.jpg?size=50x50&set=set1"},
{"id":112,"first_name":"Ange","last_name":"Bovingdon","email":"abovingdon33@nhs.uk","gender":"Female","avatar":"https://robohash.org/dolorcumquererum.bmp?size=50x50&set=set1"},
{"id":113,"first_name":"Ilaire","last_name":"McCreagh","email":"imccreagh34@google.com","gender":"Male","avatar":"https://robohash.org/etsolutaipsum.png?size=50x50&set=set1"},
{"id":114,"first_name":"Roldan","last_name":"Birkmyr","email":"rbirkmyr35@wufoo.com","gender":"Male","avatar":"https://robohash.org/laborumquisaepe.png?size=50x50&set=set1"},
{"id":115,"first_name":"Lauralee","last_name":"Duffrie","email":"lduffrie36@springer.com","gender":"Female","avatar":"https://robohash.org/autemetculpa.jpg?size=50x50&set=set1"},
{"id":116,"first_name":"Cale","last_name":"Denisot","email":"cdenisot37@chron.com","gender":"Male","avatar":"https://robohash.org/eligendisintperspiciatis.bmp?size=50x50&set=set1"},
{"id":117,"first_name":"Archy","last_name":"Wastling","email":"awastling38@sourceforge.net","gender":"Male","avatar":"https://robohash.org/laboreporroquos.bmp?size=50x50&set=set1"},
{"id":118,"first_name":"Edd","last_name":"Winslet","email":"ewinslet39@a8.net","gender":"Male","avatar":"https://robohash.org/estvitaequam.jpg?size=50x50&set=set1"},
{"id":119,"first_name":"Irwin","last_name":"Klemt","email":"iklemt3a@nydailynews.com","gender":"Male","avatar":"https://robohash.org/sedoptioducimus.bmp?size=50x50&set=set1"},
{"id":120,"first_name":"Obed","last_name":"Zavittieri","email":"ozavittieri3b@alexa.com","gender":"Male","avatar":"https://robohash.org/voluptasameteius.jpg?size=50x50&set=set1"},
{"id":121,"first_name":"Janaye","last_name":"Mellish","email":"jmellish3c@mediafire.com","gender":"Female","avatar":"https://robohash.org/teneturinciduntaccusantium.png?size=50x50&set=set1"},
{"id":122,"first_name":"Nataline","last_name":"Wincer","email":"nwincer3d@jiathis.com","gender":"Female","avatar":"https://robohash.org/voluptasvoluptatempraesentium.png?size=50x50&set=set1"},
{"id":123,"first_name":"Harp","last_name":"Raine","email":"hraine3e@gov.uk","gender":"Male","avatar":"https://robohash.org/placeatfugiatvoluptas.bmp?size=50x50&set=set1"},
{"id":124,"first_name":"Wood","last_name":"Kosiada","email":"wkosiada3f@cnn.com","gender":"Male","avatar":"https://robohash.org/essesedaut.jpg?size=50x50&set=set1"},
{"id":125,"first_name":"Wayne","last_name":"Chiommienti","email":"wchiommienti3g@woothemes.com","gender":"Male","avatar":"https://robohash.org/illonobisaliquam.bmp?size=50x50&set=set1"},
{"id":126,"first_name":"Saundra","last_name":"Fishleigh","email":"sfishleigh3h@reddit.com","gender":"Male","avatar":"https://robohash.org/rerumautplaceat.png?size=50x50&set=set1"},
{"id":127,"first_name":"Iorgo","last_name":"Kwietek","email":"ikwietek3i@techcrunch.com","gender":"Male","avatar":"https://robohash.org/dolormolestiasaspernatur.bmp?size=50x50&set=set1"},
{"id":128,"first_name":"Ginni","last_name":"d'Escoffier","email":"gdescoffier3j@reddit.com","gender":"Female","avatar":"https://robohash.org/adistinctiodolor.png?size=50x50&set=set1"},
{"id":129,"first_name":"Casie","last_name":"Hulstrom","email":"chulstrom3k@huffingtonpost.com","gender":"Female","avatar":"https://robohash.org/veltemporeet.jpg?size=50x50&set=set1"},
{"id":130,"first_name":"Artair","last_name":"Jasper","email":"ajasper3l@reddit.com","gender":"Male","avatar":"https://robohash.org/dolorequidemblanditiis.bmp?size=50x50&set=set1"},
{"id":131,"first_name":"Randall","last_name":"Hunnywell","email":"rhunnywell3m@xing.com","gender":"Male","avatar":"https://robohash.org/iureminusneque.png?size=50x50&set=set1"},
{"id":132,"first_name":"Oralee","last_name":"Batram","email":"obatram3n@sfgate.com","gender":"Female","avatar":"https://robohash.org/inventorequisrerum.jpg?size=50x50&set=set1"},
{"id":133,"first_name":"Kristoffer","last_name":"Giller","email":"kgiller3o@behance.net","gender":"Male","avatar":"https://robohash.org/harumesseet.png?size=50x50&set=set1"},
{"id":134,"first_name":"Liza","last_name":"Bratt","email":"lbratt3p@rediff.com","gender":"Female","avatar":"https://robohash.org/etipsumvoluptatem.png?size=50x50&set=set1"},
{"id":135,"first_name":"Iris","last_name":"Knapper","email":"iknapper3q@google.ru","gender":"Female","avatar":"https://robohash.org/reprehenderitmagnamut.bmp?size=50x50&set=set1"},
{"id":136,"first_name":"Aurelia","last_name":"O'Looney","email":"aolooney3r@fastcompany.com","gender":"Female","avatar":"https://robohash.org/adipisciaperiamaliquam.bmp?size=50x50&set=set1"},
{"id":137,"first_name":"Roslyn","last_name":"Knevit","email":"rknevit3s@intel.com","gender":"Female","avatar":"https://robohash.org/nonporroincidunt.bmp?size=50x50&set=set1"},
{"id":138,"first_name":"Gussy","last_name":"McKevany","email":"gmckevany3t@berkeley.edu","gender":"Female","avatar":"https://robohash.org/quidoloresoptio.bmp?size=50x50&set=set1"},
{"id":139,"first_name":"Annalise","last_name":"Bellocht","email":"abellocht3u@bandcamp.com","gender":"Female","avatar":"https://robohash.org/dignissimosnihilut.bmp?size=50x50&set=set1"},
{"id":140,"first_name":"Latia","last_name":"Girauld","email":"lgirauld3v@chronoengine.com","gender":"Female","avatar":"https://robohash.org/aperiamsintoccaecati.bmp?size=50x50&set=set1"},
{"id":141,"first_name":"Tess","last_name":"Axten","email":"taxten3w@china.com.cn","gender":"Female","avatar":"https://robohash.org/ipsamsedvoluptatibus.jpg?size=50x50&set=set1"},
{"id":142,"first_name":"Georgy","last_name":"McClifferty","email":"gmcclifferty3x@xing.com","gender":"Male","avatar":"https://robohash.org/doloruminomnis.bmp?size=50x50&set=set1"},
{"id":143,"first_name":"Kimmie","last_name":"Brandon","email":"kbrandon3y@si.edu","gender":"Female","avatar":"https://robohash.org/utearumomnis.jpg?size=50x50&set=set1"},
{"id":144,"first_name":"Minerva","last_name":"Devers","email":"mdevers3z@nps.gov","gender":"Female","avatar":"https://robohash.org/asperioreseadelectus.jpg?size=50x50&set=set1"},
{"id":145,"first_name":"Dunc","last_name":"Karleman","email":"dkarleman40@blogger.com","gender":"Male","avatar":"https://robohash.org/voluptatemliberodolor.bmp?size=50x50&set=set1"},
{"id":146,"first_name":"Marleah","last_name":"Armatys","email":"marmatys41@surveymonkey.com","gender":"Female","avatar":"https://robohash.org/undesiteum.png?size=50x50&set=set1"},
{"id":147,"first_name":"Susanna","last_name":"MacFarland","email":"smacfarland42@t-online.de","gender":"Female","avatar":"https://robohash.org/totammolestiaepraesentium.jpg?size=50x50&set=set1"},
{"id":148,"first_name":"Josh","last_name":"Seilmann","email":"jseilmann43@guardian.co.uk","gender":"Male","avatar":"https://robohash.org/quidemdoloremaperiam.png?size=50x50&set=set1"},
{"id":149,"first_name":"Dewie","last_name":"Konig","email":"dkonig44@utexas.edu","gender":"Male","avatar":"https://robohash.org/eiusprovidentfuga.bmp?size=50x50&set=set1"},
{"id":150,"first_name":"Barnabe","last_name":"Taye","email":"btaye45@canalblog.com","gender":"Male","avatar":"https://robohash.org/voluptatibusdelectusodio.bmp?size=50x50&set=set1"}];

  constructor(public navCtrl: NavController) {
    
    this.datos.forEach(
                elemento =>{
                    elemento.visible = true;                    
                });
  }


    busqueda(){        
        if(this.cadenaBusqueda.trim()==''){
            this.datos.forEach(
                    elemento =>{
                        elemento.visible = true;                        
                    });            
        }else{            
            this.datos.forEach(
                    elemento =>{
                    if(elemento.first_name.includes(this.cadenaBusqueda))
                        elemento.visible = true;
                    else
                        elemento.visible = false;                        
                    });
        }
        
    }
}
