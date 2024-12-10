import TableRow from "./TableRow"

function TableApp() {
    return (
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700">
            <table className="w-full text-left table-auto min-w-max  bg-white shadow-md rounded-lg bg-clip-border">
                <thead>
                <tr>
                    <th className="p-4 border-b border-slate-200 bg-white">
                    <p className="font-bold text-sm leading-none text-black">
                        Date & Time
                    </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-white">
                    <p className="font-bold text-sm leading-none text-black">
                        Type
                    </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-white">
                    <p className="font-bold text-sm leading-none text-black">
                        From / To
                    </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-white">
                    <p className="font-bold text-sm leading-none text-black">
                        Description
                    </p>
                    </th>
                    <th className="p-4 border-b border-slate-200 bg-white">
                    <p className="font-bold text-sm leading-none text-black">
                        Amount
                    </p>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <TableRow datetime='20:10 - 30 June 2022' type='Debit' fromto='31000010' desc='Fore Coffee' amount='75.000,00' isPlus={false}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Credit' fromto='1001' desc='Topup from Bank Transfer' amount='1.000.000,00' isPlus={true}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Debit' fromto='31000010' desc='Fore Coffee' amount='75.000,00' isPlus={false}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Credit' fromto='1001' desc='Topup from Bank Transfer' amount='1.000.000,00' isPlus={true}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Debit' fromto='31000010' desc='Fore Coffee' amount='75.000,00' isPlus={false}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Credit' fromto='1001' desc='Topup from Bank Transfer' amount='1.000.000,00' isPlus={true}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Debit' fromto='31000010' desc='Fore Coffee' amount='75.000,00' isPlus={false}/>
                    <TableRow datetime='20:10 - 30 June 2022' type='Credit' fromto='1001' desc='Topup from Bank Transfer' amount='1.000.000,00' isPlus={true}/>
                </tbody>
            </table>
            <div className="flex justify-between items-center py-3">
                <div className="flex">
                <button className="shadow-lg py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded-s-xl rounded-e-none hover:bg-slate-50 hover:border-teal-400 transition duration-200 ease">
                    Prev
                </button>
                <button className="shadow-lg py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-teal-700 border border-teal-700 rounded-none hover:bg-slate-600 hover:border-teal-600 transition duration-200 ease">
                    1
                </button>
                <button className="shadow-lg py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded-none hover:bg-slate-50 hover:border-teal-400 transition duration-200 ease">
                    2
                </button>
                <button className="shadow-lg py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded-none hover:bg-slate-50 hover:border-teal-400 transition duration-200 ease">
                    3
                </button>
                <button className="shadow-lg py-1 min-w-9 min-h-9 text-sm font-bold text-teal-700 bg-white border border-slate-200 rounded-e-xl rounded-s-none hover:bg-slate-50 hover:border-teal-400 transition duration-200 ease">
                    Next
                </button>
                </div>
            </div>
        </div>
    )
}

export default TableApp