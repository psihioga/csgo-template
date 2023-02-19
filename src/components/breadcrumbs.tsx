export interface BreadProps {
    crumbs?: string[];
    total?: number;
}

export const Breadcrumbs = (props: BreadProps) => {

    return (
        <ul className="block">
            <li className="inline">jackpot &gt;</li>
            <li className="inline">fail</li>
        </ul>
    )

}