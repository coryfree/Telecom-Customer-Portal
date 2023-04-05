import Plan from "./Plan";
import User from "./User";

class Device{
    phoneNumber:String;
    deviceName:String;
    deviceDescription:String;
    user:User;
    plan: Plan;

    constructor(phoneNumber:String = "", deviceName:String = "", deviceDescription:String = "", user:User = new User, plan:Plan = new Plan){
        this.phoneNumber = phoneNumber;
        this.deviceName = deviceName;
        this.deviceDescription = deviceDescription;
        this.user = user;
        this.plan = plan;
    }
}
export default Device;