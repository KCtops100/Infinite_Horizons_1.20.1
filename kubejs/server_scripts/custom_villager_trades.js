MoreJSEvents.villagerTrades((event) => {
    event.addTrade("cleric", 2, [TradeItem.of('minecraft:emerald', 1, 3)], TradeItem.of('minecraft:amethyst_shard', 1, 7));
    event.addTrade("farmer", 2, [TradeItem.of('minecraft:emerald', 1, 2)], TradeItem.of('minecraft:ink_sac', 8, 16));
    event.addTrade("cleric", 2, ['minecraft:emerald'], TradeItem.of('ars_nouveau:blue_archwood_sapling', 1, 5));
    event.addTrade("cleric", 2, ['minecraft:emerald'], TradeItem.of('ars_nouveau:green_archwood_sapling', 1, 5));
    event.addTrade("cleric", 2, ['minecraft:emerald'], TradeItem.of('ars_nouveau:purple_archwood_sapling', 1, 5));
    event.addTrade("cleric", 2, ['minecraft:emerald'], TradeItem.of('ars_nouveau:red_archwood_sapling', 1, 5));
    event.addTrade("cleric", 2, ['minecraft:emerald'], TradeItem.of('ars_elemental:yellow_archwood_sapling', 1, 5));
    event.addTrade(
        "spacecatcustomprofessions:agronomancer", 1,
        [TradeItem.of('minecraft:emerald', 1, 3)],
        TradeItem.of('mysticalagriculture:inferium_essence', 1, 5)
    );
    const agronomancerTrades = [
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:air_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:earth_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:fire_essence', count: 7 }
        },
        {
            level: 2,
            inputs: [
                { item: 'minecraft:emerald', count: 3 },
                { item: 'mysticalagriculture:inferium_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:water_essence', count: 7 }
        },
        {
            level: 3,
            inputs: [
                { item: 'mysticalagriculture:inferium_essence', count: 3 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ],
            output: { item: 'mysticalagriculture:ice_essence', count: 7 }
        },
        { 
            level: 3, 
            inputs: [
                { item: 'mysticalagriculture:stone_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:deepslate_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:earth_essence', count: 5 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:nature_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:deepslate_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:nether_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:nature_essence', count: 5 },
                { item: 'mysticalagriculture:water_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:coral_essence', count: 7 } 
        },
        { 
            level: 4, 
            inputs: [
                { item: 'mysticalagriculture:nature_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:honey_essence', count: 7 } 
        },
        { 
            level: 3, 
            inputs: [
                { item: 'mysticalagriculture:stone_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:limestone_essence', count: 7 } 
        },
        { 
            level: 5, 
            inputs: [
                { item: 'mysticalagriculture:nether_essence', count: 5 },
                { item: 'mysticalagriculture:air_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:end_essence', count: 7 } 
        },
        { 
            level: 5, 
            inputs: [
                { item: 'mysticalagriculture:nether_essence', count: 5 },
                { item: 'mysticalagriculture:fire_essence', count: 5 }
            ], 
            output: { item: 'mysticalagriculture:blaze_essence', count: 7 } 
        }
    ];

    agronomancerTrades.forEach((trade) => {
        event.addTrade(
            "spacecatcustomprofessions:agronomancer",
            trade.level,
            [
                TradeItem.of(trade.inputs[0].item, trade.inputs[0].count),
                TradeItem.of(trade.inputs[1].item, trade.inputs[1].count)
            ],
            TradeItem.of(trade.output.item, trade.output.count)
        );
    });

    const farmerTrades1 = [
        'pamhc2crops:raspberryitem', 'pamhc2crops:rhubarbitem', 'pamhc2crops:rutabagaitem', 'pamhc2crops:scallionitem', 'pamhc2crops:sesameseedsitem',
        'pamhc2crops:spiceleafitem', 'pamhc2crops:strawberryitem', 'pamhc2crops:sweetpotatoitem', 'pamhc2crops:taroitem', 'pamhc2crops:agaveitem',
        'pamhc2crops:arrowrootitem', 'pamhc2crops:blackberryitem', 'pamhc2crops:blueberryitem', 'pamhc2crops:cactusfruititem', 'pamhc2crops:candleberryitem',
        'pamhc2crops:cantaloupeitem', 'pamhc2crops:cassavaitem', 'pamhc2crops:coffeebeanitem', 'pamhc2crops:cranberryitem', 'pamhc2crops:elderberryitem',
        'pamhc2crops:garlicitem', 'pamhc2crops:gingeritem', 'pamhc2crops:grapeitem', 'pamhc2crops:greengrapeitem', 'pamhc2crops:huckleberryitem',
        'pamhc2crops:jicamaitem', 'pamhc2crops:juniperberryitem', 'pamhc2crops:kiwiitem', 'pamhc2crops:kohlrabiitem', 'pamhc2crops:leekitem',
        'pamhc2crops:mulberryitem', 'pamhc2crops:mustardseedsitem', 'pamhc2crops:parsnipitem', 'pamhc2crops:peanutitem', 'pamhc2crops:pineappleitem',
        'pamhc2crops:radishitem', 'pamhc2crops:tealeafitem', 'pamhc2crops:turnipitem', 'pamhc2crops:waterchestnutitem', 'pamhc2crops:whitemushroomitem',
        'pamhc2crops:alfalfaitem', 'pamhc2crops:aloeitem', 'pamhc2crops:barrelcactusitem', 'pamhc2crops:canolaitem', 'pamhc2crops:cattailitem',
        'pamhc2crops:cloudberryitem', 'pamhc2crops:lotusitem', 'pamhc2crops:nettlesitem', 'pamhc2crops:truffleitem', 'pamhc2crops:wolfberryitem',
        'pamhc2crops:guaranaitem', 'pamhc2crops:papyrusitem', 'pamhc2crops:sunchokeitem'
    ];

    farmerTrades1.forEach(trade => {
        event.addTrade("farmer", 1, `26x ${trade}`, 'minecraft:emerald');
    })

    const farmerTrades2 = [
        'pamhc2crops:artichokeitem', 'pamhc2crops:asparagusitem', 'pamhc2crops:bellpepperitem', 'pamhc2crops:broccoliitem', 'pamhc2crops:brusselsproutitem',
        'pamhc2crops:caulifloweritem', 'pamhc2crops:celeryitem', 'pamhc2crops:chilipepperitem', 'pamhc2crops:cucumberitem', 'pamhc2crops:eggplantitem',
        'pamhc2crops:kaleitem', 'pamhc2crops:lettuceitem', 'pamhc2crops:okraitem', 'pamhc2crops:peasitem', 'pamhc2crops:spinachitem',
        'pamhc2crops:tomatilloitem', 'pamhc2crops:wintersquashitem', 'pamhc2crops:zucchiniitem', 'pamhc2crops:chiaitem', 'pamhc2crops:nopalesitem',
        'pamhc2crops:bokchoyitem', 'pamhc2crops:calabashitem'
    ];

    farmerTrades2.forEach(trade => {
        event.addTrade("farmer", 1, `22x ${trade}`, 'minecraft:emerald');
    });

    const farmerTrades3 = [
        'pamhc2crops:amaranthitem', 'pamhc2crops:barleyitem', 'pamhc2crops:beanitem', 'pamhc2crops:chickpeaitem', 'pamhc2crops:cornitem',
        'pamhc2crops:cottonitem', 'pamhc2crops:juteitem', 'pamhc2crops:kenafitem', 'pamhc2crops:lentilitem', 'pamhc2crops:milletitem',
        'pamhc2crops:oatsitem', 'pamhc2crops:quinoaitem', 'pamhc2crops:ryeitem', 'pamhc2crops:sisalitem', 'pamhc2crops:soybeanitem',
        'pamhc2crops:sorghumitem', 'pamhc2crops:yuccaitem'
    ];

    farmerTrades3.forEach(trade => {
        event.addTrade("farmer", 1, `20x ${trade}`, 'minecraft:emerald');
    });

    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage','{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:spruce_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:resin_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Resin Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:spruce_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:dark_oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:dark_oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:dark_oak_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:birch_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:birch_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:yellow_black_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Yellow Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:jungle_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:acacia_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:cherry_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:mangrove_wood_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:green_carpenter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Green Carpenter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:stone_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:mason_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Mason Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:stone_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:digger_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Digger Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:coarse_dirt_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:coarse_dirt_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:leafcutter_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Leafcutter Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:coarse_dirt_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:sand_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:sand_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:snow_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:sweat_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Sweat Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:gravel_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:chocolate_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Chocolate Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:gravel_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:digger_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Digger Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 1,    // Profession and level.
        ['productivebees:gravel_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:sugar_cane_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:mason_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Mason Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:sugar_cane_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:reed_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Reed Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 2,    // Profession and level.
        ['productivebees:slimy_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Slimy Bee",type:"productivebees:slimy"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 3,    // Profession and level.
        ['productivebees:glowstone_nest', TradeItem.of('minecraft:glowstone_dust', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Glowing Bee",type:"productivebees:glowing"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 3,    // Profession and level.
        ['productivebees:soul_sand_nest', TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ghostly Bee",type:"productivebees:ghostly"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 4,    // Profession and level.
        ['productivebees:nether_quartz_nest', TradeItem.of('minecraft:quartz', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Crystalline Bee",type:"productivebees:crystalline"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        ['productivebees:nether_gold_nest', TradeItem.of('minecraft:gold_ingot', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Gold Bee",type:"productivebees:gold"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 4,    // Profession and level.
        ['productivebees:nether_brick_nest', TradeItem.of('minecraft:magma_cream', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Magmatic Bee",type:"productivebees:magmatic"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 4,    // Profession and level.
        ['productivebees:end_stone_nest', TradeItem.of('minecraft:popped_chorus_fruit', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ender Bee",type:"productivebees:ender"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        ['productivebees:obsidian_nest', TradeItem.of('minecraft:dragon_breath', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Draconic Bee",type:"productivebees:draconic"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        [Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:0,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:blue_banded_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Blue Banded Bee"}'), TradeItem.of('minecraft:emerald', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:15.0f,Invulnerable:0b,MaxHealth:15.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:2,bee_productivity:2,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:neon_cuckoo_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Neon Cuckoo Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        [Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{"naturesaura:time_alive":40},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:7.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:ashy_mining_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Ashy Mining Bee"}'), TradeItem.of('minecraft:emerald', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:10.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:1,bee_productivity:1,bee_temper:1,bee_type:"solitary",bee_weather_tolerance:0,entity:"productivebees:nomad_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Nomad Bee"}')  // Output item.
    );
    event.addTrade(
        "spacecatcustomprofessions:apiarist", 5,    // Profession and level.
        [Item.of('minecraft:fishing_rod', '{Damage:0}'), TradeItem.of('productivebees:honey_treat', 1, 3)],  // Input item(s).
        Item.of('productivebees:sturdy_bee_cage', '{Age:0,AngerTime:0,BalmData:{},CanUpdate:1b,ForcedAge:0,ForgeCaps:{"curios:inventory":{Curios:[]},"mekanism:radiation":{radiation:1.0E-7d}},ForgeData:{},HasConverted:0b,HasNectar:0b,HasStung:0b,Health:10.0f,Invulnerable:0b,MaxHealth:7.0f,PersistenceRequired:0b,bee_behavior:0,bee_endurance:0,bee_productivity:0,bee_temper:0,bee_type:"hive",bee_weather_tolerance:0,breathCollectionCooldown:600,entity:"productivebees:configurable_bee","forge:spawn_type":"SPAWN_EGG",isProductiveBee:1b,mod:"ProductiveBees",name:"Oily Bee",type:"productivebees:oily"}')  // Output item.
    );
});

