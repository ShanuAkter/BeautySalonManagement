export class Expert {
   
    name: string;
    specialty: string;
    contactInformation: string;
    experienceYears: number;
    imgurl1: string;
    constructor( name: string, specialty: string, contactInformation: string, experienceYears: number, imgurl1: string){

        
        this.name=name;
        this.specialty=specialty;
        this.contactInformation=contactInformation;
        this.experienceYears=experienceYears;
        this.imgurl1=imgurl1;
    }
}
