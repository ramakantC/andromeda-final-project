import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "DripChain Marketplace",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr1zd02jn27j9q4jk648m4prhmn6z5cl0wj64uwfgnqu06mzrklfk2qh7z7t7",
            cw721: "andr1x843ng953xujc0rqvqynwdrppzqenp8yy9qu5zfd5n4xn0fx4eusehrfzq",
            name: "Winter Collection 2025",
            featured: "DRIP",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1",
        }
    ],
};

export default CONFIG;
