import Device from "./Device";

class Plan{
    dataPlanID:String;
    numberOfDevices:Number;
    planDescription:String;
    costPerDevice:Number;

    constructor(dataPlanID:String = "", numberOfDevices:Number = 0, planDescription:String = "", costPerDevice:Number = 0){
        this.dataPlanID = dataPlanID;
        this.numberOfDevices = numberOfDevices;
        this.planDescription = planDescription;
        this.costPerDevice = costPerDevice;
    }
}
export default Plan;