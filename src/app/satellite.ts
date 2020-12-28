export class Satellite {
    public name : string;
    public type: string; 
    public launchDate: string; 
    public orbitType: string; 
    public operational: boolean;
    public alternateColor: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name
    this.type = type
    this.launchDate = launchDate 
    this.orbitType = orbitType 
    this.operational = operational
    }

    shouldShowWarning() { 

        if(this.type.toUpperCase() === 'SPACE DEBRIS') {
            return true;
        } else {
            return false;
        }


    } 
}

// export class Satellite {    // from sneppets.com
//     constructor(public name: string, type: string, launchDate: string, orbitType: string, operational: boolean){  }
// }