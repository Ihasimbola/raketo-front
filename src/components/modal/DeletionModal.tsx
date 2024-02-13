import { redirect, useFetcher, useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import Text from "../Text/Text";
import { createPortal } from "react-dom";
import { TopicService } from "../../services/topicService";

export async function action({ params, request }: any) {
  try {
    const id = params.id;
    const res = await TopicService.deleteTopic(id);
    return redirect("/singa");
    // console.log(res);
    // return res;
  } catch (error: any) {
    console.error("Error deleting topic" + error.message);
  }
}

function DeletionModal() {
  const fetcher = useFetcher();
  const navigate = useNavigate()

  return (
    <div className='modal rounded-md'>
      {
        createPortal((<div className='modal__overlay' onClick={() => navigate(-1)}></div>), document.body)
      }
      <Text>Hamafa marina tokoa ve?</Text>
      <div className="flex flex-row justify-between mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
        >
          Tsia
        </Button>
        <fetcher.Form method='DELETE' className="trash">
          <Button
            variant="danger"
            type="submit"
          >
            Eny
          </Button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default DeletionModal