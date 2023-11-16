interface Summoner {
    summonerId: string,
    summonerName: string,
    leaguePoints: number,
    rank: string,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean
}

type LeaderboardProps = {
    data: {
        tier: string,
        leagueId: string,
        queue: string,
        name: string,
        entries: Summoner[]
    }
}

function LeaderboardTable({data}: LeaderboardProps){

    const skeletonArray = [];
    for(let x = 0; x < 100; x++){
        skeletonArray.push(
            <tr>
                <th className="skeleton"></th>
                <td className="skeleton"></td>
                <td className="skeleton"></td>
                <td className="skeleton"></td>
                <td className="skeleton"></td>
                <td className="skeleton"></td>
            </tr>
        )
    }

    if(data === undefined) {
        return <div className="w-[64rem]">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Summoner</th>
                        <th>Tier</th>
                        <th>LP</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>
                </thead>
                <tbody>
                        {skeletonArray}
                </tbody>
            </table>
        </div>
    } else {
        return <div className="w-[64rem]">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Summoner</th>
                        <th>Tier</th>
                        <th>LP</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>
                </thead>
                <tbody>
                    {data.entries.map((summoner: any, index: number) => 
                        <tr>
                            <th>{index + 1}</th>
                            <td>{summoner.summonerName}</td>
                            <td>{data.tier}</td>
                            <td>{summoner.leaguePoints} LP </td>
                            <td>{summoner.wins}</td>
                            <td>{summoner.losses}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    }
}

export default LeaderboardTable;