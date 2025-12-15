import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import image from "@/assets/avatarImage.jpg";

function ProfileImage() {
  return (
    <div className="md:w-60 md:h-60 w-40 h-40 rounded-full overflow-hidden border-2 border-primary shadow-lg mx-auto">
      <Avatar className="w-full h-full">
        <AvatarImage src={image} alt="Profile" className="object-cover" />
        <AvatarFallback className="text-2xl font-semibold">
          GO
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default ProfileImage;
