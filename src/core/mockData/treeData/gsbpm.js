export const gsbpm = {
	id: 'gsbpm',
	nodeKey: 'gsbpm',
	label: 'Phases du GSBPM',
	gsbpm: [
		{
			id: 'gsbpm-qualite',
			label: 'Gestion de la qualité',
			description: '',
		},
		{
			id: 'gsbpm-2',
			label: 'Concevoir',
			description:
				'Cette phase décrit les activités de développement et de conception et tous les travaux de recherche pratiques connexes nécessaires pour définir les produits, concepts, méthodes, instruments de collecte et processus opérationnels statistiques. Elle englobe tous les éléments de conception nécessaires pour définir ou affiner les produits ou services statistiques mis à jour dans l’étude de cas. Elle précise toutes les métadonnées pertinentes prêtes à être utilisées ultérieurement dans le processus de production statistique ainsi que les procédures d’assurance de la qualité. Pour les produits statistiques élaborés à intervalles réguliers, cette phase intervient lors de la première itération, et chaque fois que des mesures propres à améliorer le processus sont identifiées dans la phase d’évaluation de l’itération précédente.',
			gsbpm: [
				{
					id: 'gsbpm-2-1',
					label: 'Conception des descriptions de variables',
					description:
						'Ce sous-processus définit les variables statistiques à recueillir au moyen de l’instrument de collecte, ainsi que toutes les autres variables qui en seront tirées dans le cadre du sous-processus 5.5 (Calcul de nouvelles variables et unités) et toutes les classifications statistiques qui seront utilisées. On s’attache en principe à respecter les normes nationales et internationales existantes chaque fois que possible. Ce sous-processus devrait peut-être se dérouler en parallèle au sous-processus 2.3 (Conception de la collecte) car la définition des variables à collecter et le choix des instruments de collecte peuvent être interdépendants dans une certaine mesure. La préparation des descriptions de variables et classifications recueillies et obtenues sous forme de métadonnées est un préalable nécessaire aux phases suivantes.',
				},
				{
					id: 'gsbpm-2-3',
					label: 'Conception de la collecte',
					description:
						'Ce sous-processus détermine la ou les méthode(s) et instrument(s) les plus appropriés. Les activités menées effectivement au cours de ce sous-processus dépendront des types d’instrument de collecte requis qui peuvent être des entretiens assistés par ordinateur, des questionnaires sur support papier, des interfaces de données administratives et des techniques d’intégration de données. Ce sous-processus englobe la conception d’instruments de collecte, de modèles de questions-réponses (en conjonction avec les variables et les classifications statistiques établies dans le cadre du sous-processus 2.2 (Conception des descriptions de variables)). Il comprend aussi la conception de tous les accords formels en vue de la fourniture de données, comme les mémorandums d’accord et la validation des bases juridiques de la collecte des données. Ce sous-processus est facilité par des outils tels que les collections de questions (qui permettent de réutiliser des questions et leurs caractéristiques), les outils de création de questionnaire (qui permettent de compiler rapidement et facilement des questions dans des formats adaptés aux essais cognitifs) et les modèles d’accord (pour faciliter la normalisation des conditions et modalités). Ce sous-processus comprend aussi la conception de systèmes de gestion de fournisseurs adaptés au processus.',
				},
				{
					id: 'gsbpm-2-5',
					label: 'Conception du traitement et de l’analyse',
					description:
						'Ce sous-processus englobe la conception de la méthode de traitement statistique qui doit être appliquée au cours des phases de « traitement » et d’« analyse ». Il peut comprendre la définition des routines de codage, d’édition, d’imputation, d’estimation, d’intégration, de validation et de finalisation des ensembles de données.',
				},
			],
		},
		{
			id: 'gsbpm-3',
			label: 'Construire',
			description:
				'Cette phase permet d’élaborer et de mettre à l’essai le produit retenu jusqu’à ce qu’il soit prêt à être utilisé dans des conditions réelles. Les produits de la phase de « conception » orientent les choix de processus, d’instruments, d’informations et de services réutilisables qui sont regroupés et configurés à ce stade pour créer l’environnement opérationnel complet permettant de lancer le processus. De nouveaux services sont élaborés par exception, pour combler les lacunes constatées dans le catalogue de services existant provenant de l’organisme lui-même ou de l’extérieur. Ces nouveaux services sont conçus de façon à être en grande partie réutilisables dans l’architecture de production statistique.',
			gsbpm: [
				{
					id: 'gsbpm-3-1',
					label: 'Réutilisation et élaboration de l’instrument de collecte',
					description:
						'Ce sous-processus décrit les activités visant à concevoir les instruments à utiliser au cours de la phase de « collecte ». L’instrument de collecte est produit ou élaboré d’après le cahier des charges établi au cours de la phase de « conception ». Une collecte peut faire appel à un ou plusieurs modes de réception des données, par exemple des interrogatoires directs ou des entretiens téléphoniques; des questionnaires sur support papier, sur support électronique ou sur Internet; des plates-formes SDMX. On peut aussi utiliser comme instruments de collecte les routines d’extraction de données utilisées pour réunir des informations issues d’ensembles de données statistiques ou administratifs existants. Ce sous-processus prévoit aussi la préparation et la mise à l’essai du contenu et du fonctionnement de l’instrument choisi (par exemple, mise à l’essai des questions figurant dans un questionnaire). Il est recommandé d’étudier le lien direct entre les instruments de collecte et le système de métadonnées statistiques, de façon à faciliter le recueil de métadonnées pendant la phase de collecte. La corrélation des métadonnées et des données au point de saisie permet de réduire la charge de travail lors des phases suivantes. La saisie des paramètres de mesure de la collecte de données (paradonnées) revêt aussi de l’importance pour ce sous-processus.',
				},
			],
		},
	],
};
