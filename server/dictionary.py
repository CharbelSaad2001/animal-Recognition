# Función para obtener información de un animal
def get_animal_info(nombre_comun):
    animal = animales.get(nombre_comun)
    if animal:
        return animal
    else:
        return "Animal no encontrado."

# Definición de los datos de los animales
animales = {
    "coati_de_nariz_blanca": {
        "scientific_name": "Nasua Narica",
        "movement_type": "Terrestre",
        "avg_weight": "4-6 kg",
        "avg_height": "110 cm",
        "life_span": "14 años",
        "danger_level": "Bajo",
        "feeding_type": "Carnivoro",
        "find_in": {
            "latitude": -12.1464,
            "longitude": -71.3983
        },
        "image": "../client/src/images/coati_de_nariz_blanca.png"
    },
    "tamandua": {
        "scientific_name": "Tamandua Tetradactyla",
        "movement_type": "Terrestre",
        "avg_weight": "3.5-8.5 kg",
        "avg_height": "50-80 cm",
        "life_span": "9 años",
        "danger_level": "Bajo",
        "feeding_type": "Mirmecófago",
        "find_in": {
            "latitude": -1.1050,
            "longitude": -71.3983
        },
        "image": "../client/src/images/tamandua.png"
    },
    "ocelote": {
        "scientific_name": "Leopardus Pardalis",
        "movement_type": "Terrestre",
        "avg_weight": "8-16 kg",
        "avg_height": "70-90 cm",
        "life_span": "10-15 años",
        "danger_level": "Medio",
        "feeding_type": "Carnívoro",
        "find_in": {
            "latitude": -12.8420,
            "longitude": -69.2890
        },
        "image": "../client/src/images/ocelote.png"
    },
    "tapir_amazonico": {
        "scientific_name": "Tapirus Terrestris",
        "movement_type": "Terrestre",
        "avg_weight": "180-320 kg",
        "avg_height": "2 metros de largo y 1 metro de altura a la cruz.",
        "life_span": "25-30 años",
        "danger_level": "Vulnerable",
        "feeding_type": "Herbívoro",
        "find_in": {
            "latitude": -3.1422,
            "longitude": -64.7764
        },"image": "../client/src/images/tapir_amazonico.png"
    },
    "puma": {
        "scientific_name": "Puma Concolor",
        "movement_type": "Terrestre",
        "avg_weight": "29-90 kg",
        "avg_height": "60-90 cm",
        "life_span": "8-13 años",
        "danger_level": "Muy Bajo",
        "feeding_type": "Carnívoro",
        "find_in": {
            "latitude": -12.1464,
            "longitude": -71.7277
        },
        "image": "../client/src/images/puma.png"
    },
    "oso_hormiguero_gigante": {
        "scientific_name": "Myrmecophaga Tridactyla",
        "movement_type": "Terrestre",
        "avg_weight": "33-50 kg",
        "avg_height": "90-120 cm",
        "life_span": "14-16 años",
        "danger_level": "Alto",
        "feeding_type": "Mirmecófago",
        "find_in": {
            "latitude": -2.1489,
            "longitude": -59.0551
        },
        "image": "../client/src/images/oso_hormiguero_gigante.png"
    },
    "jaguar": {
        "scientific_name": "Panthera onca",
        "movement_type": "Terrestre",
        "avg_weight": "56-96 kg",
        "avg_height": "70-90 cm",
        "life_span": "12-15 años",
        "danger_level": "Medio",
        "feeding_type": "Carnívoro",
        "find_in": {
            "latitude": -3.1400,
            "longitude": -64.8000
        },
        "image": "../client/src/images/jaguar.png"
    },
    "armadillo_gigante": {
        "scientific_name": "Priodontes Maximus",
        "movement_type": "Terrestre",
        "avg_weight": "18-32 kg",
        "avg_height": "75-100 cm",
        "life_span": "12-15 años",
        "danger_level": "Alta",
        "feeding_type": "Omnívoro",
        "find_in": {
            "latitude": -14.5700,
            "longitude": -60.7500
        },
        "image": "../client/src/images/armadillo_gigante.png"
    },
    "pecari_de_labios_blancos": {
        "scientific_name": "Tayassu Pecari",
        "movement_type": "Terrestre",
        "avg_weight": "35-45 kg",
        "avg_height": "90-130 cm",
        "life_span": "12-15 años",
        "danger_level": "Medio",
        "feeding_type": "Omnívoro",
        "find_in": {
            "latitude": -12.8420,
            "longitude":  -69.2890
        },
        "image": "../client/src/images/pecari_de_labios_blancos.png"
    },
    "capibara": {
        "scientific_name": "Hydrochoerus Hydrochaeris",
        "movement_type": "Terrestre Acuático",
        "avg_weight": "35-65 kg",
        "avg_height": "50-60 cm",
        "life_span": "8-10 años",
        "danger_level": "Ninguno",
        "feeding_type": "Herbívoro",
        "find_in": {
            "latitude": -12.8420,
            "longitude":  -69.2890
        },
        "image": "../client/src/images/capibara.png"
    },
    "mono_ardilla": {
        "scientific_name": "Saimiri Sciureus",
        "movement_type": "Arborícola",
        "avg_weight": "500-750 g",
        "avg_height": "25-40 cm",
        "life_span": "10-15 años",
        "danger_level": "Medio",
        "feeding_type": "Omnívoro",
        "find_in": {
            "latitude": -12.8420,
            "longitude":  -69.2890
        },
        "image": "../client/src/images/mono_ardilla.png"
    },
}
