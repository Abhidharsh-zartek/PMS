import React from "react";
import { observer } from "mobx-react-lite";
// hooks
import { useApplication } from "hooks/store";
// icons
import { MoveLeft, Zap, UserPlus } from "lucide-react";
import { Tooltip } from "@plane/ui";
// assets
import useSize from "hooks/use-window-size";
import { MemberCardIcon } from "components/common/appIcons";
import { Button } from "@plane/ui";


export interface WorkspaceHelpSectionProps {
  setSidebarActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkspaceHelpSection: React.FC<WorkspaceHelpSectionProps> = observer(() => {
  // store hooks
  const {
    theme: { sidebarCollapsed, toggleSidebar, toggleMobileSidebar },
    commandPalette: { toggleShortcutModal },
  } = useApplication();

  const [windowWidth] = useSize();


  const isCollapsed = sidebarCollapsed || false;

  return (
    <>
      <div
        className={`flex w-full items-center justify-between gap-1 self-baseline border-t border-custom-border-200 bg-custom-sidebar-background-100 px-4 py-2 ${isCollapsed ? "flex-col" : ""
          }`}
      >

        <div className={`flex items-center gap-1 ${isCollapsed ? "flex-col justify-center" : "w-full justify-evenly"}`}>

          {!isCollapsed && (
            <Button
              type="button"
              variant="outline-primary"
              className="w-1/3 rounded-lg flex flex-row items-center justify-center gap-2 px-2.5 py-1.5 text-xs"
            >
              <UserPlus className="h-3.5 w-3.5" /> Invite
            </Button>
          )}

          <Tooltip tooltipContent="Shortcuts">
            <button
              type="button"
              className={`grid place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 ${isCollapsed ? "w-full" : ""
                }`}
              onClick={() => toggleShortcutModal(true)}
            >
              <Zap className="h-3.5 w-3.5" />
            </button>
          </Tooltip>

          <Tooltip tooltipContent={`Employee Directory`}>
            <button
              type="button"
              className={`hidden place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 md:grid ${isCollapsed ? "w-full" : ""
                }`}
            // onClick={() => windowWidth <= 768 ? toggleMobileSidebar() : toggleSidebar()}
            >
              <MemberCardIcon className={`h-3.5 w-3.5 duration-300`} />
            </button>
          </Tooltip>

          <button
            type="button"
            className="grid place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 md:hidden"
            onClick={() => windowWidth <= 768 ? toggleMobileSidebar() : toggleSidebar()}
          >
            <MoveLeft className="h-3.5 w-3.5" />
          </button>

          <Tooltip tooltipContent={`${isCollapsed ? "Expand" : "Hide"}`}>
            <button
              type="button"
              className={`hidden place-items-center rounded-md p-1.5 text-custom-text-200 outline-none hover:bg-custom-background-90 hover:text-custom-text-100 md:grid ${isCollapsed ? "w-full" : ""
                }`}
              onClick={() => windowWidth <= 768 ? toggleMobileSidebar() : toggleSidebar()}
            >
              <MoveLeft className={`h-3.5 w-3.5 duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
            </button>
          </Tooltip>


        </div>
      </div>
    </>
  );
});
