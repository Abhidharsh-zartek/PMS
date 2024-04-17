import { ExportIcon, PrinterIcon, WritingIcon } from "components/common/appIcons";
import ExpenseList from "./ExpenseList";
import { Tooltip } from "@plane/ui";
import { AlertCircle } from "lucide-react";


export default function ProjectExpenses({ page, workspaceSlug, projectId, setEditPopup }: { setEditPopup: (val: any) => void, page: 'running' | 'estimated', workspaceSlug: string, projectId?: string }) {

    return (
        <div className='max-w-4xl w-full px-4 sm:px-8 mx-auto py-4 flex flex-col overflow-auto'>
            <div className='flex flex-row items-center gap-2 text-custom-sidebar-text-200'>
                <span className='sm:-ml-6 font-semibold'>Dashiee</span>
                <Tooltip tooltipContent={<div className="-m-2 p-1 flex flex-row items-center gap-px rounded-md border-2 border-custom-border-200">
                    <AlertCircle className='h-4' /> Edit Estimated ROI
                </div>}>
                    <button onClick={() => setEditPopup({
                        project: 'project-1',
                        startDate: '2024-03-01',
                        dueDate: '2024-03-01',
                        marketingCost: '100',
                        uiuxCost: 'uiux-1',
                        salesCost: '100',
                        adminCost: '100',
                        projectManager: 'manager-1',
                        developerCost: '200',
                        developerCostQA: '100',
                        developerCostBA: '200',
                        toolCost: '1000',
                        travelAndMiscCost: '100',
                        costDueToRisk: '50',
                        totalRevanue: '2000'
                    })} >
                        <WritingIcon className="h-4 w-4" />
                    </button>
                </Tooltip>
            </div>
            <div className='mt-5 px-5 text-sm text-custom-sidebar-text-200 font-medium w-full flex flex-row flex-wrap items-center gap-4 justify-between'>
                <span>Start Date:20/01/2024</span>
                {page === 'running' && <span>Running Date:02/02/2024</span>}
                <span>Due Date:07/03/2024</span>
            </div>
            <ExpenseList title="Fixed Expenses" expenses={[
                {
                    label: 'Marketing Cost',
                    value: '10,000.00'
                },
                {
                    label: 'UI/UX Cost',
                    value: '20,000.00'
                },
                {
                    label: 'Sales Cost',
                    value: '5,000.00'
                },
                {
                    label: 'UI/UX Cost',
                    value: '20,000.00'
                },
                {
                    label: 'Sales Cost',
                    value: '5,000.00'
                },
                {
                    label: 'UI/UX Cost',
                    value: '20,000.00'
                },
                {
                    label: 'Sales Cost',
                    value: '5,000.00'
                },
                {
                    label: 'Total Fixed Expenses',
                    value: '35,000.00',
                    sumType: true
                },
            ]} />
            <ExpenseList title="Additional Expenses" expenses={[
                {
                    label: 'Travel and miscellaneous',
                    value: '60,000.00'
                },
                {
                    label: 'Cost due to Risk',
                    value: '40,000.00'
                },
                {
                    label: 'Total Additional Expenses',
                    value: '1,00,000.00',
                    sumType: true
                },
                {
                    label: 'Total Expenses',
                    value: '9,22,000.00',
                    sumType: true
                },
                {
                    label: 'Revenue of Project',
                    value: '12,00,000.00'
                },
            ]} />
            <ExpenseList title="ROI" expenses={[
                {
                    label: 'Total Profit & Loss',
                    ebitdaTag: true,
                    value: '+2,88,000.00'
                },
                {
                    label: 'Percentage Profit & Loss',
                    ebitdaTag: true,
                    value: '+24%'
                },

            ]} />
            <div className='my-7 w-full flex flex-row items-center justify-end gap-3'>
                <button className='text-xs text-white bg-[#204095] hover:opacity-80 flex flex-row items-center gap-2 px-3 py-1.5'>
                    Print
                    <PrinterIcon className="h-4 mb-0.5" />
                </button>
                <button className='text-xs text-white bg-[#204095] hover:opacity-80 flex flex-row items-center gap-2 px-3 py-1.5'>
                    Export to excel
                    <ExportIcon className="h-4 mb-0.5" />
                </button>
            </div>
        </div>
    );
}