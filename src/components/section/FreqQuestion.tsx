import Details from "../util/Details";

export default function FreqQuestions({
    faq = [
        {
            question: 'Ako sa môžem prihlásiť na kurz?',
            answer:
                'Prihlásiť sa môžete jednoducho cez našu webovú stránku. Vyberte si kurz, ktorý vás zaujíma a kliknite na tlačidlo "Prihlásiť sa".'
        },
        {
            question: 'Koľko trvá jeden kurz?',
            answer:
                'Čas trvania kurzu závisí od jeho náročnosti a vašich cieľov. V priemere trvá jeden kurz 3 mesiace.'
        },
        {
            question: 'Koľko stojí jeden kurz?',
            answer:
                'Cena kurzu závisí od jeho náročnosti a jazyka, ktorý sa učíte. Priemerná cena kurzu je 20 € za hodinu.'
        },
        {
            question: 'Koľko lektorov máte?',
            answer:
                'V našej jazykovej škole máme viac ako 10 lektorov, ktorí vám radi pomôžu s výberom kurzu a úrovne.'
        }
    ]
}) {
    return (
        
<section id="faq">
	<div
		className="relative mx-auto grid lg:grid-cols-2 items-center max-w-2xl lg:max-w-7xl gap-x-8 gap-y-10 md:gap-y-20 px-4 pb-24"
	>
		<div className="overflow-hidden">
			<img
				src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
				alt="Obrázok k otázkam"
				className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-mr-32 lg:-ml-96"
				width="2432"
				height="1442"
			/>
		</div>
		<div>
			{faq.map(({ question, answer }, id) => (
				<Details isOpen={id === 0} question={question} answer={answer} />
            ))}
		</div>
	</div>
</section>

    )
}