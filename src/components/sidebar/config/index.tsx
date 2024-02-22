import AudienceIcon from "../../../icons/AudienceIcon";
import CampaignIcon from "../../../icons/CampaignIcon";
import ContentIcon from "../../../icons/ContentIcon";
import DashbordIcon from "../../../icons/DashbordIcon";
import FlowsIcon from "../../../icons/FlowsIcon";
import SettingsIcon from "../../../icons/SettingsIcon";

export interface IContentItems {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
}

export const contentItems: IContentItems[] = [
  {
    icon: <DashbordIcon />,
    text: "Dashboard",
    isActive: false,
  },
  {
    icon: <CampaignIcon />,
    text: "Campaign",
    isActive: false,
  },
  {
    icon: <AudienceIcon />,
    text: "Audience",
    isActive: true,
  },
  {
    icon: <FlowsIcon />,
    text: "Flows",
    isActive: false,
  },
  {
    icon: <ContentIcon />,
    text: "Content",
    isActive: false,
  },
  {
    icon: <SettingsIcon />,
    text: "Settings",
    isActive: false,
  },
];
