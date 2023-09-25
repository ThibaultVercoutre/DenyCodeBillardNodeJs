import './css/actualites.css';

export const Actualites = () => {
    return (
        <section id="actualites">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>

            <h1>V2.0 - Vérification d'exercice et page devs (21 mai 2023)</h1>
            
            <h3>Vérification d'exercice</h3>
            <p>La vérification d'exercice est maintenant fonctionnelle ! Mais attention, nous n'avons pas fini. Effectivement, cette vérification ne
                fonctionne qu'avec les exercices en Python. Essayez par vous-même, et tenter de valider les 3 seuls exercices validables sur
                le site.
            </p>
            
            <h3>Page devs</h3>
            <p>Une page devs a été créée, accessible en cliquant quelque part sur la page principale. Vous pouvez voir ainsi les personnes étant Développeurs sur le site, mais ne les stalkez pas ! Ils sont assez pris
                comme ça.
            </p><h1>V1.5 - Ajout des interactions entre utilisateur (17 mai 2023)</h1>
            
            <h3>Les amis</h3>
            <p>Vous pouvez maintenant ajouter des amis, à vous d'accepter les demandes ou pas !</p>
            <p>De plus, vous avez la possibilité de leur parler via un chat. Seuls les messages textuels fonctionnent</p>
            <h1>V1.4 - Amélioration de l'editeur de code Denytor et correction de bugs (15 mai 2023)</h1>
            
            <p>Cette mise à jour n'ajoute pas de nouvelles fonctionnalités mais corrige des bugs et améliore l'editeur de code Denytor.
                Nous sommes en route pour la 2.0 qui débloquera de nouvelles fonctionnalités.</p>
            
            <h3>Amélioration de l'editeur de code Denytor</h3>
            <p>Vous avez pu le remarquer, l'editeur de code Denytor a été amélioré. Votre code est désormais sauvegardé à chaque "run" de votre code. 
                Nous avons aussi ajouté une fonctionnalité qui permet de voir les erreurs de syntaxe en temps réel. Cela vous permettra de corriger vos erreurs plus facilement.</p>
            
            <h3>Correction de bugs</h3>
            <p>Vous avez aussi surement remarquer qu'il n'était pas possible de se connecter. Nous avons enfin pu régler ce problème. Maintenant, vous pouvez
                vous inscrire et vous connecter sans problème.</p><h1>V1.3 - Résolution de problèmes et amélioration de compte (9 mai 2023)</h1>
            
            <h3>Amélioration de compte</h3>
            <p>Nous avons ajouté une multitude de petites fonctionnalités comme les trophées, qui sont des succès réalisables sur le site. Découvrez les, et vous
                aurez de belles récompenses.</p>
            <p>Aussi, nous avons mis en place un système d'étoiles, qui seront des points utilisables dans un exercice pour avoir un indice. Vous pourrez
                gagner des étoiles en complétant des exercices.</p>
            
            <h3>Les exercices</h3>
            <p>Pour l'instant, il n'y a pas eu beaucoup de choses côté exercices. Mais rassurez vous, nous y avons travaillé ces derniers temps. C'est pour cela
                que sur les exercices disponibles, vous verrez que la correction a disparu, laissant place à un éditeur de code avec une console. Le langage est
                choisis automatiquement en fonction de l'exercice, il vous suffit de cliquer sur "Exécuter le code" pour voir le résultat.</p>
            <p>De plus, nous avons avons ajouté deux exercices en language C qui sont les suivants :</p>
            <table>
                <caption>Table des exercices</caption>
                <tr>
                    <th scope="col">Nom de l'exercice</th>
                    <th scope="col">Notion</th>
                    <th scope="col">Language</th>
                </tr>
                <tr>
                    <td>Liste de cartes</td>
                    <td>Listes</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>Liste de courses</td>
                    <td>Listes</td>
                    <td>C</td>
                </tr>
            </table><h1>V1.2 - Quelques fonctionnalités (6 mai 2023)</h1>
            <p>Dans cette version, nous nous sommes concentrés sur les détails, mais aussi sur certaines fonctionnalités. Tout d'abord les petits détails :</p>
            <ul>
                <li>La notification lors de l'inscription lorsque qu'un email ou un pseudo est saisi et qu'il est le même qu'un déjà présent dans la base de données</li>
                <li>Un petit message sur la page principale pour montrer la version du site</li>
                <li>Si un utilisateur choisit un thème, celui-ci est enregistré lors de sa prochaine utilisation</li>
                <li>Si un utilisateur possède un pseudo cours, le texte "Déconnexion" ne dépasse plus</li>
                <li>Le bouton d'accueil reste affiché en permanence sur l'écran, peu importe le niveau de scroll</li>
            </ul>
            
            <h3>XP</h3>
            <p>Nous avons mis en place un système d'xp, et pour en gagner il suffit tout simplement de compléter des exercices sur le site Vous aurez ensuite accès à la correction.</p>
            <p>Pour l'instant, il n'est pas encore possible de compléter des exercices et de valider l'xp, mais cette fonctionnalité arrivera sous peu.</p>
            <p>Des récompenses seront mises en place. Devenez le Top1 de DenyCodeBillard. Si vous êtes Top3, c'est déjà pas mal.</p>
            
            <h3>LeaderBoard</h3>
            <p>Nous avons aussi travaillé sur un LeaderBoard suite au système d'xp.</p>
            <p>Sur le LeaderBoard, vous pouvez voir le Top3 mondial en évidence, et jusqu'au Top100. Essayez d'y être !</p>
            
            <h3>Inscription</h3>
            <p>Nous avons aussi apporté une grosse modification lors de l'inscription sur le site web. En effet, nous avons apporté une fonctionnalité importante, à savoir la vérification de l'email. Maintenant, lorsque vous créez un compte, vous recevrez un mail pour valider celui-ci.</p>
            
            <h3>Compte utilisateur</h3>
            <p>Vous pouvez maintenant vous connectez à l'aide de votre pseudo.</p>
            <p>Vous avez maintenant la possibilité de changer votre prénom, nom, mot de passe et email. 
                Attention pour ce dernier, cela n'impactera pas votre connection, mais s'il nous venait à l'idée de vous envoyer un mail, 
                assurez-vous qu'elle soit valide.</p>
            <p>Pour votre mot de passe, vous recevrez un mail pour pouvoir ensuite le changer. C'est pour cela qu'il vous faut une adresse mail valide.</p>
            <p>Il est aussi possible que vous ne vous souveniez plus de votre mot de passe. Dans ce cas, vous pouvez cliquer sur "Mot de passe oublié" et vous recevrez un email pour pouvoir le changer après avoir renseigné soit votre email soit votre pseudo. Si en plus de ça vous avez oublié votre email ou votre pseudo, et bien... bien joué. Nous ne pouvons plus rien faire pour vous !</p>
            
            <h3>Thème</h3>
            <p>Le thème sombre est maintenant effectif sur l'ensemble du site sauf les pages d'exercices, qui reste un domaine en très grands travaux,
                et sur les pages de changement et de récupération de mot de passe, qui restent des pages où nous voulons tout d'abord privilégier la simplicité
                d'utilisation.</p>
            
            <h3>Scroll</h3>
            <p>Le scroll automatique lors du clic sur les boutons de l'accueil est désormais sans attente de l'animation, à la demande d'une grande partie de la communauté.</p><h1>V1.1 - Les détails (2 mai 2023)</h1>
            <p>Dans cette version, nous nous sommes beaucoup plus attardés sur les détails, tels que :</p>
            <ul>
                <li>Le thème sombre qui est appliqué sur l'ensemble du site</li>
                <li>Une page de connexion plus travaillée</li>
                <li>Un responsive général permettant d'utiliser le site sur téléphone</li>
                <li>Les boutons du menu se désactivant lorsque l'on en actionne un, avec une animation légèrement plus rapide</li>
                <li>Le langages JavaScript corrigé</li>
                <li>L'ajout de l'actualité</li>
                <li>La position des cases langages / notions / exercices changée</li>
            </ul>
            <p>Pas de nouveaux exercices dans cette version, il faudra attendre encore un peu.</p><h1>V1 - Les prémices (1er mai 2023)</h1>
            <p>Le site est en cours de développement, mais avec cette première version vous avez accès à certaines fonctionnalités.</p>
            
            <h3>Les exercices</h3>
            <p>Dans cette première version, vous avez l'essence principale du site, à savoir les exercices d'algorithmie.
                Pour les consulter, vous pouvez utiliser la section "langages", qui répertorie les exercices par langage.
                Mais si vous chercher une notion particulière, vous pouvez utiliser la section "notions", qui repertorie les exercices par notion.
                Sur cette V1 vous avez accès aux notions suivantes :</p>
            <ul>
                <li>Les APIs, les boucles, les dictionnaires, les graphes, les listes et les objets</li>
            </ul>
            <p>Et aux langages suivants :</p>
            <ul>
                <li>C, C++, CSS, HTML, Java, Javascript, Matlab, PHP, Python, R</li>
            </ul>
            <p>Bien sûr, en l'état des choses, il n'y a pas beaucoup d'exercices, mais nous travaillons à en ajouter régulièrement. Voici les exercices disponibles :</p>
            <table>
                <caption>Table des exercices</caption>
                <tr>
                    <th scope="col">Nom de l'exercice</th>
                    <th scope="col">Notion</th>
                    <th scope="col">Language</th>
                </tr>
                <tr>
                    <td>Liste de numéros</td>
                    <td>Listes</td>
                    <td>Python</td>
                </tr>
                <tr>
                    <td>Liste de courses</td>
                    <td>Listes</td>
                    <td>Python</td>
                </tr>
                <tr>
                    <td>Trouver la boule</td>
                    <td>Boucles</td>
                    <td>Python</td>
                </tr>
            </table>
            <p>Nous n'avons donc pas pour l'instant une bibliotheque très fournie, mais nous travaillons à l'agrandir.</p>
            
            <h3>Les classements</h3>
            <p>Vous avez aussi accès aux classements, qui vous permettent de voir les statistiques par langage, par notion, ou par exercice
                par rapport au nombre de visite sur chaque exercice. Il vous sera possible de voir quels exercices seraient trop surcôtés,
                et pouvoir devenir un développeur original, qui n'a pas peur de se démarquer des autres.</p>
            
            <h3>L'exercice de la semaine</h3>
            <p>Chaque semaine, un exercice sera proposé, il vous permettra de parcourir plusieurs notions représentées par plusieurs parties à l'exercice. 
                Une correction sera apportée à chaque fin de semaine. Elle n'en restera pas moins unique. Le principal étant que vous ayez compris l'exercice.
                Après cela, l'exercice de la semaine sera découpé par parties, et donc par notion, et mis à disposition en tant que plusieurs petits exercices liés entre eux.</p>
            
            <h3>Le compte utilisateur</h3>
            <p>Vous avez aussi la possibilité de créer un compte utilisateur, il n'apporte pas grand chose pour l'instant, mais sera accompagné de plusieurs fonctionnalités par la suite.</p>
        </section>
    );
};