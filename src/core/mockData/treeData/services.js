export const services = {
	id: 's0',
	label: 'Les services',
	nodeKey: 'services',
	services: [
		{
			id: 's100',
			label: "Conception d'enquêtes",
			description: '',
			niveau: 1,
			services: [
				{
					id: 's110',
					label: 'Accompagnement à la conception d’enquêtes',
					description: '',
					niveau: 2,
					services: [
						{
							id: 's111',
							label: 'Accompagnement à la conception du protocole de collecte',
							description: '',
							niveau: 3,
						},
						{
							id: 's112',
							label: 'Accompagnement à la conception du protocole de collecte',
							description: '',
							niveau: 3,
						},
					],
				},
				{
					id: 's120',
					label:
						'Atelier de conception du modèle de questionnaires pour différents usages',
					description: '',
					niveau: 2,
					services: [
						{
							id: 's121',
							label: 'Outil de conception du modèle de questionnaires',
							description: '',
							niveau: 3,
						},
					],
				},
			],
		},
		{
			id: 's200',
			label: 'Accès aux enquêtes',
			description: '',
			niveau: 1,
			services: [
				{
					id: 's210',
					label:
						"Offrir une vitrine de l'enquête en phase avec insee.fr et qui respecte un cadre standardisé commun à toutes les enquêtes ménages",
					description: '',
					niveau: 2,
				},
				{
					id: 's220',
					label: 'Espace dédié aux enquêtés',
					description: '',
					niveau: 2,
				},
			],
		},
		{
			id: 's003',
			label: 'Collecte Web',
			description:
				'Champ : Sont exclus les parties accès (présentation de l’enquête, authentification…) et assistance, traitées par ailleurs.',
			niveau: 1,
		},
	],
};
