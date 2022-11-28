import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { MapboxServiceService, Feature } from './mapbox-service.service';

declare var mapboxgl: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any = [];
  @ViewChild("stepsModal")
  stepsModal: IonModal;
  openModal: boolean = false;
  start = [];
  end = [];
  map: any;
  mode: string = "driving";
  routes: number = 1;
  routeloaded: boolean = false;
  distance: string = "";
  duration: string = "";
  steps: Array<any> = [];
  routeData: any;
  geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
  });

  constructor(
    private alertController: AlertController,
    private route: Router,
    private fsDB: AngularFirestore,
    private authOb: AngularFireAuth,
    private mapboxService: MapboxServiceService
    ) {}

    addresses: string[] =  [];
    selectedAddress = null;

    ngOnInit() {
      this.userData();
    }

    ionViewDidEnter() {
      this.loadMap();
    }


    loadMap() {
      const bounds = [
        [121.006948, 13.735103], // Southwest coordinates
        [121.108504, 13.851841] // Northeast coordinates
        ];

      const bauanbatangasAM = [
        [121.010125, 13.790706],
        [121.010118, 13.791823],
        [121.010096, 13.793347],
        [121.009967, 13.793467],
        [121.007118, 13.793410],
        [121.007199, 13.792180],
        [121.007494, 13.790414],
        [121.007565, 13.790160],
        [121.007784, 13.790206],
        [121.009667, 13.790674],
        [121.010128, 13.790679],
        [121.015199, 13.789609],
        [121.018272, 13.788904],
        [121.019690, 13.788480],
        [121.020253, 13.788264],
        [121.029451, 13.782907],
        [121.041852, 13.777639],
        [121.052019, 13.770126],
        [121.056756, 13.763501],
        [121.056796, 13.763438],
        [121.058292, 13.756403],
        [121.056601, 13.756198],
        [121.055986, 13.756073],
        [121.055884, 13.753313],
        [121.053478, 13.750256],
        [121.053050, 13.750615],
        [121.052935, 13.750756],
        [121.052814, 13.751071],
        [121.051987, 13.755171],
        [121.051885, 13.755580],
        [121.051874, 13.755924],
        [121.052052, 13.757050],
        [121.051777, 13.758104],
        [121.051130, 13.761699],
        [121.051100, 13.761815],
        [121.051707, 13.762157],
        [121.051982, 13.762385],
        [121.052065, 13.762534],
        [121.052065, 13.762794],
        [121.049925, 13.766367],
        [121.049465, 13.766761],
        [121.048457, 13.767210],
        [121.048164, 13.767365],
        [121.048869, 13.768728],
        [121.049290, 13.769462],
        [121.050875, 13.771160]
      ]

      const alangilanbatangasAM = [
        [121.070657, 13.796572],
        [121.070826, 13.797458],
        [121.070949, 13.797708],
        [121.071201, 13.797719],
        [121.071353, 13.797543],
        [121.071142, 13.797271],
        [121.070902, 13.796975],
        [121.070680, 13.796737],
        [121.065598, 13.771314],
        [121.065541, 13.771150],
        [121.065478, 13.770989],
        [121.065447, 13.770922],
        [121.065399, 13.770826],
        [121.064649, 13.769590],
        [121.064514, 13.769458],
        [121.062579, 13.766889],
        [121.062398, 13.766653],
        [121.061530, 13.765805],
        [121.060173, 13.764896],
        [121.059200, 13.764357],
        [121.058211, 13.763660],
        [121.057829, 13.763291],
        [121.057347, 13.762635],
        [121.057114, 13.762247],
        [121.057859, 13.758436],
        [121.056976, 13.758243],
        [121.056612, 13.758280],
        [121.056968, 13.758770],
        [121.057163, 13.758969],
        [121.057352, 13.759093],
        [121.057492, 13.759177],
        [121.057656, 13.759243],
        [121.057849, 13.759305],
        [121.058850, 13.759440],
        [121.058866, 13.759893],
        [121.058985, 13.760352],
        [121.059186, 13.761774],
        [121.057190, 13.761726],
        
      ]

      const balagtasbatangasAM = [
        [121.061349, 13.791108],
        [121.063036, 13.794325],
        [121.063446, 13.794686],
        [121.064364, 13.796218],
        [121.064834, 13.796756],
        [121.065289, 13.796940],
        [121.070833, 13.797496],
        [121.065518, 13.771162],
        [121.061568, 13.765764],
        [121.060162, 13.764868],
        [121.064486, 13.763898],
        [121.063261, 13.759963],
        [121.060654, 13.760235],
        [121.060769, 13.756462],
        [121.058383, 13.756409],
        [121.055991, 13.756102],
        [121.055960, 13.757030],
        [121.056057, 13.757493],
        [121.056934, 13.758757],
        [121.057253, 13.759047],
        [121.057651, 13.759243],
        [121.057909, 13.759316],
        [121.058853, 13.759445],
        [121.058864, 13.759891],
        [121.058978, 13.760360],
        [121.057514, 13.760282],
        [121.056932, 13.763064],
        [121.056776, 13.763504],
        [121.053074, 13.768842],
        [121.052334, 13.769775],
        [121.050881, 13.771164],
        [121.051544, 13.772053],
        [121.052492, 13.773942],
        [121.052950, 13.775025],
        [121.053061, 13.775271],
        [121.053530, 13.775993],
        [121.053594, 13.777546],
        [121.053860, 13.778500],
        [121.056493, 13.782158],
        [121.056698, 13.782383],
        [121.059388, 13.786649],
        [121.060661, 13.789726],
        [121.061134, 13.790592],
      ]

      const capitoliobatangasAM = [
        [121.0652197, 13.7704082],
        [121.0649368, 13.7699327],
        [121.0648871, 13.7698554],
        [121.0642302, 13.7688482],
        [121.0636556, 13.7680163],
        [121.0633417, 13.7676125],
        [121.0631037, 13.7673355],
        [121.0626699, 13.7668486],
        [121.061678, 13.7658576],
        [121.061465, 13.7656696],
        [121.0611695, 13.7654473],
        [121.0612452, 13.7655013],
        [121.0610146, 13.7653435],
        [121.0603755, 13.7649576],
        [121.0602937, 13.7649089],
        [121.0602073, 13.7648222],
        [121.0602877, 13.7647737],
        [121.060373, 13.7647541],
        [121.0628008, 13.764229],
        [121.0643572, 13.7639339],
        [121.0644722, 13.7638948],
        [121.0645352, 13.7639],
        [121.064518, 13.7638084],
        [121.0643086, 13.7630096],
        [121.064024, 13.7620917],
        [121.0639674, 13.7620065],
        [121.0632759, 13.7600406],
        [121.0632025, 13.7599932],
        [121.0606707, 13.7602224],
        [121.0606477, 13.7601811],
        [121.0606042, 13.7596838],
        [121.0605994, 13.759536],
        [121.0607785, 13.7566108],
        [121.0607699, 13.7565282],
        [121.060689, 13.7564799],
        [121.0585172, 13.7564073],
        [121.0584249, 13.7564005],
        [121.0580091, 13.7563548],
        [121.0560587, 13.7560887],
        [121.05599, 13.756145],
        [121.0560142, 13.757014],
        [121.0560855, 13.757375],
        [121.0561632, 13.7575681],
        [121.0566937, 13.7583873],
        [121.0569579, 13.7587544],
        [121.0570517, 13.7588687,],
        [121.0571188, 13.75893],
        [121.0572895, 13.759051],
        [121.0573774, 13.7590932],
        [121.0577191, 13.7592376],
        [121.0578258, 13.7592932],
        [121.058853, 13.759442],
        [121.058864, 13.759886],
        [121.059050, 13.760856],
        [121.057411, 13.760768],
        [121.057131, 13.762230],
        [121.057877, 13.763264],
        [121.058223, 13.763605],
        [121.060100, 13.764812],
        [121.064191, 13.763988],
        [121.064504, 13.764127],
        [121.064917, 13.766132],
        [121.065454, 13.769670],
        [121.070798, 13.768531],
        [121.071227, 13.768383],
        [121.071635, 13.768091],
        [121.072190, 13.767554],
        [121.072496, 13.767015],
        [121.073327, 13.764076],
        [121.073615, 13.762669],
        [121.073653, 13.760598],
        [121.070990, 13.758200],
        [121.070839, 13.757989],
        [121.070755, 13.757728],
        [121.070684, 13.756708],
        [121.067365, 13.756523],
        [121.067296, 13.756280],
        [121.067169, 13.756161],
        [121.067119, 13.756103],
        [121.067073, 13.755999],
        [121.066500, 13.753785],
        [121.068239, 13.753677],
        [121.069073, 13.753760],
        [121.070273, 13.753991],
        [121.070599, 13.754687],
        [121.070889, 13.757991],
        [121.072078, 13.759127],
        [121.072928, 13.759889],
        [121.073602, 13.759552],
        [121.073778, 13.759706],
        [121.073620, 13.762492],
        [121.072447, 13.767163],
        [121.071863, 13.767925],
        [121.071312, 13.768361 ],
        [121.070696, 13.768588],
        [121.065507, 13.769713],
        [121.065453, 13.769750],
        [121.065568, 13.770935],
        [121.065363, 13.770812],


      ]
      
      const baletebatangasAM = [
          [121.070020, 13.800204],
          [121.070346,13.799298 ],
          [121.070716, 13.797657],
          [121.070738, 13.797518],
          [121.065365, 13.796966],
          [ 121.064857, 13.796767],
          [121.064396, 13.796340],
          [121.063532, 13.794798],
          [121.063029, 13.794354],
          [121.053844, 13.778626],
          [121.053539, 13.777360],
          [121.053534, 13.776078],
          [121.050739, 13.771421],
          [121.056720, 13.763588],
          [121.057103, 13.762166],
          [121.058298, 13.756401],
          [121.057202, 13.756254],
          [121.057464, 13.754172],
          [121.055861, 13.753300],
          [121.055319, 13.752478],
          [121.056490, 13.751316,],
          [121.056854, 13.750659],
          [121.055846, 13.750349],
          [121.055014, 13.749856],
          [121.053884, 13.749636],
          [121.053454, 13.750244],
          [121.053014, 13.750702],
          [121.052950, 13.750804],
          [121.052848, 13.751062],
          [121.052000, 13.755201],
          [121.051901, 13.755622],
          [121.052070, 13.757056],
          [121.051292, 13.761360],
          [121.051122, 13.761815]
      ]

      const lipabatangasAM = [
        [121.090257, 13.851101],
        [121.090047, 13.850769],
        [121.089675, 13.850010],
        [121.089431, 13.849190],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ]

      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoibmFneXlzYSIsImEiOiJjbGF3bWl2YTgwMnFwM3BtZmFldjk4OWdpIn0.b514twNwRSxm7TYe6rzBSg',
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [121.0593968,13.7565229],
        zoom: 12.5,
        maxBounds: bounds
      });

      this.map.on('load', () => {
        this.map.addSource('routecaptoliobatangasAM', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': capitoliobatangasAM
        }
        }
        });
        this.map.addLayer({
        'id': 'routecaptoliobatangasAM',
        'type': 'line',
        'source': 'routecaptoliobatangasAM',
        'layout': {
        'visibility': 'visible',
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#000000',
        'line-width': 8
        }
        });
        });


        this.map.on('load', () => {
          this.map.addSource('routebauanbatangas', {
          'type': 'geojson',
          'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
          'type': 'LineString',
          'coordinates': bauanbatangasAM
          }
          }
          });
          this.map.addLayer({
          'id': 'routebauanbatangas',
          'type': 'line',
          'source': 'routebauanbatangas',
          'layout': {
          'visibility': 'visible',
          'line-join': 'round',
          'line-cap': 'round'
          },
          'paint': {
          'line-color': '#0000FF',
          'line-width': 8
          }
          });
          });

        this.map.on('load', () => {
          this.map.addSource('routealangilanbatangasAM', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': alangilanbatangasAM
              }
            }
          });
          this.map.addLayer({
          'id': 'routealangilanbatangasAM',
          'type': 'line',
          'source': 'routealangilanbatangasAM',
          'layout': {
            'visibility': 'visible',
          'line-join': 'round',
          'line-cap': 'round'
          },
          'paint': {
          'line-color': '#FFFF00',
          'line-width': 8
          }
          });
          });

        this.map.on('load', () => {
              this.map.addSource('routebalagtasbatangasAM', {
              'type': 'geojson',
              'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
              'type': 'LineString',
              'coordinates': balagtasbatangasAM
              }
              }
              });
              this.map.addLayer({
              'id': 'routebalagtasbatangasAM',
              'type': 'line',
              'source': 'routebalagtasbatangasAM',
              'layout': {
                'visibility': 'visible',
              'line-join': 'round',
              'line-cap': 'round'
              },
              'paint': {
              'line-color': '#00FF00',
              'line-width': 8
              }
              });
              });

              this.map.on('load', () => {
                this.map.addSource('routebaletebatangasAM', {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                'type': 'LineString',
                'coordinates': baletebatangasAM
                }
                }
                });
                this.map.addLayer({
                'id': 'routebaletebatangasAM',
                'type': 'line',
                'source': 'routebaletebatangasAM',
                'layout': {
                  'visibility': 'visible', 
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': '#ff0000',
                'line-width': 8
                }
                });
                });
  

        const geojson = {
          'type': 'FeatureCollection',
          'features': [
            { //STI
              'type': 'Feature',
              'properties': {
                'iconSize': [35, 50]
              },
              'geometry': {
              'type': 'Point',
              'coordinates': [121.065032, 13.770170]
            }
          },
          { //don ramos
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.065980, 13.769548]
            }
          },
          { //Alangilan
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.069071, 13.786282]
            }
          },
          { //terminal
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.061608, 13.790313]
            }
          },
          { //Lyceum
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.064694, 13.764838]
            }
          },
          { //hilltop
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.060179, 13.764846]
            }
          },
          { //lawas
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.057443, 13.762650]
            }
          },
          { //nuciti
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.057444, 13.760331]
            }
          },
          { //baymall
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.057248, 13.758949]
            }
          },
          { //andok's
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.057878, 13.758382]
            }
          },
          { //sm
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.0700965, 13.7558889],
            }
          },
          { //pandayan
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.058208, 13.757720]
            }
          },
          { //waltermart
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.0565404, 13.7638308]
            }
          },
          { //diversion
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.0510483, 13.7714565]
            }
          },
          { //bolbok
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.0501957, 13.7716639]
            }
          },
          { //sports complex
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.044951, 13.775491]
            }
          },
          { //rotonda
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.071162, 13.79827]
            }
          },
          { //rizal ave
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.058261, 13.756500]
            }
          },
          { //plaza batangas'
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.059542, 13.755801]
            }
          },
          { //plaza bauan'
            'type': 'Feature',
            'properties': {
              'iconSize': [35, 50]
            },
            'geometry': {
            'type': 'Point',
            'coordinates': [121.007472, 13.790346]
            }
          },


        ]
      };
      
      for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        el.style.backgroundImage = `url(..//src//assets//icon//loadingunloading.png)`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';
        // el.style.visibility = "hidden";

        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Jeepneys here');
         
        // Add markers to the map.
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(this.map);
      }

        this.map.addControl(this.geolocate);      
    }

    showJeepneyRoute(jeepney){
      console.log(jeepney);
      var visibility = this.map.getLayoutProperty(jeepney, 'visibility');

      if (visibility === 'visible') {
      this.map.setLayoutProperty(jeepney, 'visibility', 'none');
      } else {
      this.map.setLayoutProperty(jeepney, 'visibility', 'visible');
      }
    };

    locateUser() {
      this.geolocate.trigger();

        this.geolocate.on('geolocate', function(e) {
        var lon = e.coords.longitude;
        lon = lon.toString();
        var lat = e.coords.latitude;
        lat = lat.toString();
        var position = [lon, lat];
        console.log("current position: " + position);
        });
    }

  goToSettings() {
    this.route.navigate(['/settings']);
  }

  commutingGuide() {
    this.route.navigate(['/commuting-guide']);
  }

  fareGuide() {
    this.route.navigate(['/fareguide']);
  }

  userData(){
    // this.authOb.currentUser.then( (user)=>{
    //   const userID = user.uid;
    //   console.log(user);
    //   this.fsDB.collection('users').doc(userID).snapshotChanges().subscribe( res =>{
    //     console.log(res);
    //   })
    // })
      this.fsDB.collection("users").get().subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.users.push(doc.data());
      });
    });
  }

  async laterAlert() {
    const alert = await this.alertController.create({
      header: 'Leaving Later at',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Jeepney',
          type: 'radio',
          value: 'jeepney',
        },
        {
          label: 'Tricycle',
          type: 'radio',
          value: 'tricycle',
        },
        {
          label: 'Bus',
          type: 'radio',
          value: 'bus',
        },
      ],
    });

    await alert.present();
  }
}
