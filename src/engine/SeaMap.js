var SeaMap = new Map("sea");
SeaMap.getGameLayer = function (activityData, activity) {
    var gameLayer;
    
    switch (activityData.activityID) {
        case "oysters":
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.oysterClosed_png,
                    clickedState: seaImgRes.oysterOpened_png
                },
                activity
            );
            break;
        case "rocks":
            gameLayer = new RocksLayer(
                activity
            );
            break;
        case "chests":
            gameLayer = new GameLayer(
                {
                    initState: seaImgRes.oysterClosed_png,
                    clickedState: seaImgRes.oysterOpened_png
                },
                activity
            );
            break;
        case "bubbles":
            break;
        case "octopus":
            break;
        case "jellyfish":
            break;
        case "fisherman":
            break;
    }
    
    return gameLayer;
};