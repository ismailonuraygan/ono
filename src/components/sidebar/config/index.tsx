import AudienceIcon from "../../../icons/AudienceIcon";
import CampaignIcon from "../../../icons/CampaignIcon";
import ContentIcon from "../../../icons/ContentIcon";
import DashbordIcon from "../../../icons/DashbordIcon";
import FlowsIcon from "../../../icons/FlowsIcon";
import SettingsIcon from "../../../icons/SettingsIcon";

interface IContentItems {
  icon: React.ReactNode;
  text: string;
}

export const contentItems: IContentItems[] = [
  {
    icon: <DashbordIcon />,
    text: "Dashboard",
  },
  {
    icon: <CampaignIcon />,
    text: "Campaign",
  },
  {
    icon: <AudienceIcon />,
    text: "Audience",
  },
  {
    icon: <FlowsIcon />,
    text: "Flows",
  },
  {
    icon: <ContentIcon />,
    text: "Content",
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
  },
];
