interface ExpenseListProps {
    title: string;
    expenses: {
        label: string;
        value: string;
        sumType?: boolean;
        ebitdaTag?: boolean
    }[];
}

export default function ExpenseList({ title, expenses }: ExpenseListProps) {

    return (
        <div className='mt-1.5 w-full flex flex-col gap-1 text-sm'>
            <div className='bg-[#204095] font-medium px-5 pt-2 pb-1.5 w-full flex flex-row items-center gap-4 justify-between text-white'>
                <span>{title}</span>
                <span className='italic text-xs' >All Figures in INR</span>
            </div>
            {
                expenses.map((expense, index) => {
                    return <div key={index} className={'mt-0.5 pt-2 pb-1.5 font-medium w-full flex flex-row items-center gap-4 justify-between text-custom-sidebar-text-200 ' + (expense.sumType ? 'bg-[#92C8FF] px-5 pr-8' : 'bg-custom-background-light-blue pl-8 pr-8')}>
                        <div className='flex flex-row'>
                            <span className={expense.ebitdaTag ? 'mr-2 lg:w-60' : ''}>{expense.label}</span>
                            {expense.ebitdaTag ? <span className='italic'>[EBITDA]</span> : null}
                        </div>
                        <span>{expense.value}</span>
                    </div>
                }
                )
            }
        </div>
    );
}