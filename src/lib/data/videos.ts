export type VideoItem = {
	title: string;
	src: string;
	description: string;
};

export const videos: VideoItem[] = [
	{
		title: 'Trable se strašidlem',
		src: 'https://www.youtube.com/embed/Q3oxSiM1hrY?si=QTrTpr5qKvkD5JOV',
		description: 'O radostech i starostech při natáčení našeho filmu "Trable se strašidlem".'
	},
	{
		title: 'Potrestaný zloděj',
		src: 'https://www.youtube.com/embed/iLmT45vOIpY?si=X8-UZslq2oPbbd10',
		description: 'O tom, jak jsme natáčeli pražskou legendu "Potrestaný zloděj".'
	},
	{
		title: 'Jednorožčí příběh',
		src: 'https://www.youtube.com/embed/NwpzAjj-HCw?si=0SYLfF8gB0H2g6ct',
		description: 'O tom, jak vznikl náš film "Jednorožčí příběh".'
	},
	{
		title: 'Ma bisteren',
		src: 'https://www.youtube.com/embed/DWyapvQOFNQ?si=o2OFF7TGbNM0emSU',
		description: 'O našem filmovém týmu, který pracoval na animovaném dokumentu "Ma bisteren".'
	}
];
