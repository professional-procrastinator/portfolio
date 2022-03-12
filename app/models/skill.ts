import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);
export default Skill;
