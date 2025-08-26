// @/components/Team.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string; // Optional photo URL
}

interface TeamProps {
  members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <Card key={index} className="p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-10 h-10 text-gray-500" />
              </div>
            )}
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">
            {member.name}
          </h3>
          <p className="text-blue-600 font-medium mb-3 text-sm">
            {member.role}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {member.bio}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default Team;