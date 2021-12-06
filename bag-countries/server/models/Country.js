import mongoose, { Schema } from 'mongoose';

const CountryModel =({
    name: {type: String},
    visiteStatus: {type: String, default:'planning'}, // planning switches to visited if user ticks it
    user: [{
        type: Schema.Types.ObjectId,
        ref:"BAGUsers"
    }]
  });

  const country = mongoose.model('Country', CountryModel);
  export default country;