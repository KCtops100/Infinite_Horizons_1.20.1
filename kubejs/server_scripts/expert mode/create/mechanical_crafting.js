//packmode: expert
ServerEvents.recipes(event => {
    // Pity Machine Frame
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "thermal:machine_frame"
            },
            B: {
                item: "kubejs:iron_plate"
            },
            C: {
                tag: "minecraft:logs"
            }
        },
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:machine_frame_pity"
        }
    });
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "thermal:machine_frame"
            },
            B: {
                item: "kubejs:invar_plate"
            },
            C: {
                tag: "minecraft:logs"
            }
        },
        pattern: [
            "CBC",
            "BAB",
            "CBC"
        ],
        result: {
            count: 2,
            item: "industrialforegoing:machine_frame_pity"
        }
    });

    // Fluid Extractor
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "create:mechanical_pump"
            },
            C: {
                item: "create:fluid_tank"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "kubejs:electrum_plate"
            }
        },
        pattern: [
            "DED",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:fluid_extractor"
        }
    });

    // Latex Processing Unit
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:machine_furnace"
            },
            C: {
                item: "create:fluid_tank"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "redstone_arsenal:flux_gem_block"
            }
        },
        pattern: [
            "DED",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:latex_processing_unit"
        }
    });

    // Dissolution Chamber
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:enderium_gear"
            },
            C: {
                item: "create:fluid_tank"
            },
            D: {
                item: "kubejs:electrum_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "thermal:item_buffer"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:dissolution_chamber"
        }
    });

    // Plant Gatherer
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:rf_coil"
            },
            C: {
                item: "create:mechanical_saw"
            },
            D: {
                item: "kubejs:electrum_gear"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:mechanical_harvester"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:plant_gatherer"
        }
    });

    // Sewer
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:invar_gear"
            },
            C: {
                item: "minecraft:brick"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:fluid_tank"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "CBC"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:sewer"
        }
    });

    // Sewage Composter
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:invar_gear"
            },
            C: {
                item: "minecraft:brick"
            },
            D: {
                item: "create:mechanical_piston"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "thermal:machine_furnace"
            }
        },
        pattern: [
            "EFE",
            "DAD",
            "CBC"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:sewage_composter"
        }
    });

    // Plant Fertilizer
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_simple"
            },
            C: {
                item: "kubejs:invar_gear"
            },
            D: {
                item: "thermal:item_buffer"
            },
            E: {
                item: "thermal:rf_coil"
            },
            B: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "thermal:device_composter"
            },
            G: {
                item: "kubejs:invar_plate"
            }
        },
        pattern: [
            "BBBBB",
            "BBDBB",
            "BFAFB",
            "GGGGG",
            "GCECG"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:plant_fertilizer"
        }
    });

    // Plant Sower
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:rf_coil"
            },
            C: {
                item: "create:mechanical_piston"
            },
            D: {
                item: "kubejs:electrum_gear"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:mechanical_harvester"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:plant_sower"
        }
    });

    // Mob Slaughter Factory
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "thermal:rf_coil"
            },
            C: {
                item: "mob_grinding_utils:saw"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "kubejs:electrum_gear"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:mob_slaugher_factory"
        }
    });

    // Animal Rancher
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "create:fluid_tank"
            },
            B: {
                item: "industrialforegoing:machine_frame_pity"
            },
            C: {
                item: "minecraft:shears"
            },
            D: {
                item: "kubejs:electrum_gear"
            },
            E: {
                item: "industrialforegoing:plastic"
            }
        },
        pattern: [
            "EEE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:animal_rancher"
        }
    });

    // Animal Feeder
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:invar_gear"
            },
            C: {
                item: "farmingforblockheads:feeding_trough"
            },
            D: {
                item: "kubejs:electrum_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "create:deployer"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:animal_feeder"
        }
    });

    // Animal Baby Seperator
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_pity"
            },
            B: {
                item: "kubejs:electrum_gear"
            },
            C: {
                item: "minecraft:hay_block"
            },
            D: {
                item: "kubejs:invar_plate"
            },
            E: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "farmingforblockheads:feeding_trough"
            }
        },
        pattern: [
            "EFE",
            "CAC",
            "DBD"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:animal_baby_seperator"
        }
    });

    // Mob Crusher
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_advanced"
            },
            B: {
                item: "kubejs:electrum_gear"
            },
            C: {
                item: "thermal:rf_coil"
            },
            D: {
                item: "industrialforegoing:plastic"
            },
            E: {
                item: "minecraft:bookshelf"
            },
            F: {
                item: "mob_grinding_utils:saw"
            },
            G: {
                item: "kubejs:invar_plate"
            },
            H: {
                item: "thermal:item_buffer"
            },
            I: {
                item: "thermal:fluid_cell"
            }
        },
        pattern: [
            "DDFFFDD",
            "DGGGGGD",
            "EGEIEGE",
            "EGEAEGE",
            "EGEHEGE",
            "DGGGGGD",
            "DBCCCBD",
        ],
        result: {
            count: 1,
            item: "industrialforegoing:mob_crusher"
        }
    });

    // Hydroponic Bed
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_simple"
            },
            C: {
                item: "kubejs:electrum_gear"
            },
            D: {
                item: "industrialforegoing:fertilizer"
            },
            E: {
                item: "create:mechanical_harvester"
            },
            B: {
                item: "industrialforegoing:plastic"
            },
            F: {
                item: "farmersdelight:rich_soil"
            },
            G: {
                item: "kubejs:invar_plate"
            }
        },
        pattern: [
            "BBBBB",
            "BFFFB",
            "EFFFE",
            "GDDDG",
            "GCACG"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:hydroponic_bed"
        }
    });

    // Mob Duplicator
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_advanced"
            },
            B: {
                item: "minecraft:magma_block"
            },
            C: {
                item: "thermal:rf_coil"
            },
            D: {
                item: "minecraft:nether_wart_block"
            },
            E: {
                item: "kubejs:emerald_gear"
            },
            F: {
                item: "industrialforegoing:plastic"
            },
            G: {
                item: "kubejs:invar_plate"
            },
            H: {
                item: "mysticalagriculture:soulium_spawner"
            },
            I: {
                item: "mysticalagriculture:soul_extractor"
            },
            J: {
                item: "thermal:fluid_cell"
            },
            K: {
                item: "minecraft:tinted_glass"
            },
            L: {
                item: "botania:blaze_block"
            }
        },
        pattern: [
            "FFFDFFF",
            "FKKKKKF",
            "FKKKKKF",
            "BLJAJLB",
            "GLLHLLG",
            "GEEIEEG",
            "GGGCGGG",
        ],
        result: {
            count: 1,
            item: "industrialforegoing:mob_duplicator"
        }
    });

    // // Wither Builder
    // event.remove({ id: "industrialforegoing:wither_builder" });
    // event.custom({
    //     type: "create:mechanical_crafting",
    //     acceptMirrored: false,
    //     key: {
    //         A: {
    //             item: "industrialforegoing:machine_frame_supreme"
    //         }, B: {
    //             item: "industrialforegoing:plastic"
    //         }, C: {
    //             item: "kubejs:invar_plate"
    //         }, D: {
    //             item: "forbiddenarcanus:dark_nether_star"
    //         }
    //     },
    //     pattern: [
    //         "BBBBBBBBB",
    //         "B  DDD  B",
    //         "B  DDD  B",
    //         "B  DDD  B",
    //         "C   A   C",
    //         "C       C",
    //         "C       C",
    //         "C       C",
    //         "CCCCCCCCC",
    //     ],
    //     result: {
    //         count: 1,
    //         item: "industrialforegoing:wither_builder"
    //     }
    // });

    // Material Stonework Factory
    event.custom({
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {
                item: "industrialforegoing:machine_frame_advanced"
            },
            B: {
                item: "thermal:machine_furnace"
            },
            C: {
                item: "thermal:machine_pulverizer"
            },
            D: {
                item: "thermal:machine_crafter"
            },
            E: {
                item: "thermal:device_rock_gen"
            },
            F: {
                item: "industrialforegoing:pink_slime_ingot"
            },
            G: {
                item: "kubejs:electrum_gear"
            },
            H: {
                item: "thermal:obsidian_glass"
            },
            I: {
                item: "industrialforegoing:plastic"
            },
            J: {
                item: "kubejs:invar_plate"
            }
        },
        pattern: [
            "IIIII",
            "IFDGI",
            "HCABH",
            "JGEFJ",
            "JJJJJ"
        ],
        result: {
            count: 1,
            item: "industrialforegoing:material_stonework_factory"
        }
    });
});