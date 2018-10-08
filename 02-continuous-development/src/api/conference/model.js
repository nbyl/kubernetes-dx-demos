import mongoose, { Schema } from 'mongoose'

const conferenceSchema = new Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  year: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

conferenceSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      city: this.city,
      year: this.year,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Conference', conferenceSchema)

export const schema = model.schema
export default model
