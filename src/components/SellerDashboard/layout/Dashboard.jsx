// import { UpgradeCard } from "./UpgradeCard";
import { SellerUpgradeCard } from "./UpgradeCard";
// import { StatsCards } from "./StatsCards";
import { SellerStatsCards } from "./StatsCards";
// import PropertyGrid from "./PropertyGrid";
import SellerPropertyGrid from "./PropertyGrid";

function SellerDashboard() {
    return (<>
        {/* <main className="bg-gray-100 flex flex-col w-[1144px] float-right  p-10"> */}
            <SellerUpgradeCard />
            <br />
            <SellerStatsCards />
            <br />
            <SellerPropertyGrid />
        {/* </main> */}

    </>)
};

export default SellerDashboard;