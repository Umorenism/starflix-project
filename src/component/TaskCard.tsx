interface CampaignType {
  name: string;
}

interface TaskType {
  page: string;
  limit: number;
  campaigns: CampaignType[];
}

interface TaskCardProps {
  task: TaskType;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800">{task.page}</h3>
        <div className="flex gap-2">
          <p className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
            Limit: {task.limit}
          </p>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-gray-600 font-medium">Campaigns:</p>
        {task.campaigns.length > 0 ? (
          task.campaigns.map((campaign, index) => (
            <p key={index} className="text-gray-500 text-sm italic mt-1">
              {campaign.name}
            </p>
          ))
        ) : (
          <p className="text-gray-500 text-sm italic">No campaigns</p>
        )}
      </div>
      <div className="mt-3 text-sm text-gray-500">Remaining: {task.limit}</div>
    </div>
  );
}
export default TaskCard;
