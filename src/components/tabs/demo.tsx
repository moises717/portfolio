import { Tabs } from './index';

export function TabsDemo() {
	const tabs = [
		{
			title: 'Deployments',
			value: 'deployments',
			content: (
				<div className='w-full overflow-hidden relative h-full rounded-xl p-10 text-xl md:text-4xl font-bold text-white dark:text-white bg-gray-50 dark:bg-gray-900 border'>
					<p>Product Tab</p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quasi deleniti iure totam a veniam saepe, tempore aut eaque nihil
					libero, consectetur provident minima nostrum error distinctio doloremque impedit tenetur.
				</div>
			),
		},
		{
			title: 'Github',
			value: 'github',
			content: (
				<div className='w-full overflow-hidden relative h-full rounded-xl p-10 text-xl md:text-4xl font-bold text-white dark:text-white bg-gray-50 dark:bg-gray-900 border'>
					<p>Services tab</p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam doloremque iste quo illum obcaecati repudiandae pariatur unde
					assumenda cum eaque perferendis, laboriosam ipsa iusto. Suscipit nemo magnam sed expedita?
				</div>
			),
		},
	];

	return (
		<div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-16 mt-3'>
			<Tabs tabs={tabs} />
		</div>
	);
}
