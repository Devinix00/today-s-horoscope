import { useState } from 'react';
import TableButton from '../../../../../../_components/table/TableButton';
import TableCell from '../../../../../../_components/table/TableCell';
import PushMsTableHeader from './PushMsTableHeader';

export interface Prompt {
  date: string;
  prompt: string;
}

const prompt: Prompt = {
  date: '04/23',
  prompt: `2024년 4월 25일 오늘의 한마디를 작성할거야. 
  아침에 하루를 시작하는 사람들이 이 글을보고 힘이나고 위로를 받았으면 해. 
  총 3가지 글을 작성해야해. 
  작성 방법은 예시를 참고해줘. 
  꽃비 내리는 날 설레이는 봄이에요.🌟 꽃 향기처럼 부드럽고 향기로운 하루 보내시길 바래요.🌈 
  오늘도 화이팅!💪과하게 부정적인 내용, 성적인 내용, 추상적인 내용은 피해줘. 
  내용 작성 시  오늘, 오늘은 이라는 단어는 제외하고 어투는 너무 딱딱하지 않고 부드러우면서도 반말은 사용하지 말고 존댓말을 사용해. 
  문장 가운데마다 이모티콘을 적절히 3개 이상 넣어서 작성해줘. 
  총 3개의 내용을 작성해줘. 각각의 내용 길이를  50자 미만으로 작성해주고, 2문장 이상으로 작성해줘.
  2024년 4월 25일 오늘의 한마디를 작성할거야. 
  아침에 하루를 시작하는 사람들이 이 글을보고 힘이나고 위로를 받았으면 해. 
  총 3가지 글을 작성해야해. 
  작성 방법은 예시를 참고해줘. 
  꽃비 내리는 날 설레이는 봄이에요.🌟 꽃 향기처럼 부드럽고 향기로운 하루 보내시길 바래요.🌈 
  오늘도 화이팅!💪과하게 부정적인 내용, 성적인 내용, 추상적인 내용은 피해줘. 
  내용 작성 시  오늘, 오늘은 이라는 단어는 제외하고 어투는 너무 딱딱하지 않고 부드러우면서도 반말은 사용하지 말고 존댓말을 사용해. 
  문장 가운데마다 이모티콘을 적절히 3개 이상 넣어서 작성해줘. 
  총 3개의 내용을 작성해줘. 각각의 내용 길이를  50자 미만으로 작성해주고, 2문장 이상으로 작성해줘.2024년 4월 25일 오늘의 한마디를 작성할거야. 
  아침에 하루를 시작하는 사람들이 이 글을보고 힘이나고 위로를 받았으면 해. 
  총 3가지 글을 작성해야해. 
  작성 방법은 예시를 참고해줘. 
  꽃비 내리는 날 설레이는 봄이에요.🌟 꽃 향기처럼 부드럽고 향기로운 하루 보내시길 바래요.🌈 
  오늘도 화이팅!💪과하게 부정적인 내용, 성적인 내용, 추상적인 내용은 피해줘. 
  내용 작성 시  오늘, 오늘은 이라는 단어는 제외하고 어투는 너무 딱딱하지 않고 부드러우면서도 반말은 사용하지 말고 존댓말을 사용해. 
  문장 가운데마다 이모티콘을 적절히 3개 이상 넣어서 작성해줘. 
  총 3개의 내용을 작성해줘. 각각의 내용 길이를  50자 미만으로 작성해주고, 2문장 이상으로 작성해줘.2024년 4월 25일 오늘의 한마디를 작성할거야. 
  아침에 하루를 시작하는 사람들이 이 글을보고 힘이나고 위로를 받았으면 해. 
  총 3가지 글을 작성해야해. 
  작성 방법은 예시를 참고해줘. 
  꽃비 내리는 날 설레이는 봄이에요.🌟 꽃 향기처럼 부드럽고 향기로운 하루 보내시길 바래요.🌈 
  오늘도 화이팅!💪과하게 부정적인 내용, 성적인 내용, 추상적인 내용은 피해줘. 
  내용 작성 시  오늘, 오늘은 이라는 단어는 제외하고 어투는 너무 딱딱하지 않고 부드러우면서도 반말은 사용하지 말고 존댓말을 사용해. 
  문장 가운데마다 이모티콘을 적절히 3개 이상 넣어서 작성해줘. 
  총 3개의 내용을 작성해줘. 각각의 내용 길이를  50자 미만으로 작성해주고, 2문장 이상으로 작성해줘.
  `,
};

function PushMsTable() {
  const [isClickedEditButton, setIsClickedEditButton] = useState(false);
  const [isClickedHistoryButton, setIsClickedHistoryButton] = useState(false);

  const handleClickButton = () => {
    setIsClickedEditButton(!isClickedEditButton);
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <PushMsTableHeader />
        <tbody>
          <tr>
            <TableCell size="sm">{prompt.date}</TableCell>
            <TableCell size="lg" textLeft>
              {prompt.prompt}
            </TableCell>
            <TableCell size="sm">
              <TableButton isClickedButton={isClickedEditButton} onClick={handleClickButton}>
                {isClickedEditButton ? '저장' : '수정'}
              </TableButton>
            </TableCell>
          </tr>
          <tr>
            <TableCell />
            <TableCell />
            <TableCell>
              <TableButton onClick={() => setIsClickedHistoryButton(!isClickedHistoryButton)}>history</TableButton>
            </TableCell>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PushMsTable;
