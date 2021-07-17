  
import { Repository, EntityRepository } from 'typeorm';
import { jobOfferEntity } from '../Entity/jobOfferEntity';
import { jobOfferOut } from 'src/JobOfferE/Aplications/outter/jobOfferOut';
import { commandJobOffer } from 'src/JobOfferE/Aplications/In/command/commandJobOffer';
@EntityRepository(jobOfferEntity)
export class jobOfferRepository extends Repository<jobOfferEntity> implements jobOfferOut{

    savejobOffer(jobOffer: jobOfferEntity){
    return this.save(jobOffer);
    }  

    findJobOffer(){
      return this.find();
    }
     
    findDetailJobOffer(id: number){
   
      return  this.findOne(id);
    }
}