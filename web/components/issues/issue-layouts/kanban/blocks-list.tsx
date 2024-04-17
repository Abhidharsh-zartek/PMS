import { MutableRefObject, memo } from "react";
//types
import { TIssue, IIssueDisplayProperties, IIssueMap } from "@plane/types";
import { KanbanIssueBlock } from "@/components/issues";
// components

interface IssueBlocksListProps {
  sub_group_id: string;
  columnId: string;
  issuesMap: IIssueMap;
  peekIssueId?: string;
  issueIds: string[];
  displayProperties: IIssueDisplayProperties | undefined;
  isDragDisabled: boolean;
  updateIssue: ((projectId: string, issueId: string, data: Partial<TIssue>) => Promise<void>) | undefined;
  quickActions: (issue: TIssue, customActionButton?: React.ReactElement) => React.ReactNode;
  canEditProperties: (projectId: string | undefined) => boolean;
  scrollableContainerRef?: MutableRefObject<HTMLDivElement | null>;
}

const KanbanIssueBlocksListMemo: React.FC<IssueBlocksListProps> = (props) => {
  const {
    sub_group_id,
    columnId,
    issuesMap,
    peekIssueId,
    issueIds,
    displayProperties,
    isDragDisabled,
    updateIssue,
    quickActions,
    canEditProperties,
    scrollableContainerRef,
  } = props;

  return (
    <>
      {issueIds && issueIds.length > 0 ? (
        <>
          {issueIds.sort((val1, val2) => {
            const issue1 = issuesMap[val1];
            const issue2 = issuesMap[val2];

            return new Date(issue1.updated_at) - new Date(issue2.updated_at)

          }).map((issueId, index) => {
            if (!issueId) return null;


            let draggableId = issueId;
            if (columnId) draggableId = `${draggableId}__${columnId}`;
            if (sub_group_id) draggableId = `${draggableId}__${sub_group_id}`;

            return (
              <KanbanIssueBlock
                key={draggableId}
                peekIssueId={peekIssueId}
                issueId={issueId}
                issuesMap={issuesMap}
                displayProperties={displayProperties}
                updateIssue={updateIssue}
                quickActions={quickActions}
                draggableId={draggableId}
                isDragDisabled={isDragDisabled}
                canEditProperties={canEditProperties}
                scrollableContainerRef={scrollableContainerRef}
                issueIds={issueIds} //passing to force render for virtualization whenever parent rerenders
              />
            );
          })}
        </>
      ) : null}
    </>
  );
};

export const KanbanIssueBlocksList = memo(KanbanIssueBlocksListMemo);
