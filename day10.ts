enum Gift {
    Coal = 0,
    Train = 1 << 0,
    Bicycle = 1 << 1,
    SuccessorToTheNintendoSwitch = 1 << 2,
    TikTokPremium = 1 << 3,
    Vape = 1 << 4,
    Traditional = Gift.Train | Gift.Bicycle,
    OnTheMove = Gift.Coal | Gift.Bicycle | Gift.TikTokPremium | Gift.Vape,
    OnTheCouch = (Gift.OnTheMove & ~Gift.Bicycle) |
        Gift.SuccessorToTheNintendoSwitch,
}
