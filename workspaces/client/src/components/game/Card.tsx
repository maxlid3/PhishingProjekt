import Image from 'next/image';
import { CardStateDefinition } from '@memory-cards/shared/common/types';
import { CardsMap } from '@icons/cards/CardsMap';

type Props = {
  card: CardStateDefinition;
  cardIndex: number;
  onRevealCard: (cardIndex: number) => void;
  clientId: string;
};
//TODO: would mark props as readonly (see down below)
export default function Card({card, cardIndex, onRevealCard, clientId}: Readonly<Props>) {
  let cardBg = 'bg-white/10';

  if (card.owner) {
    cardBg = card.owner === clientId ? 'bg-blue-300/50' : 'bg-red-300/50';
  }
//TODO: Images always have an alt attribute, even if you are certain the img will load, its good practice to do this
  return (
    <div
      className={`transition py-3 flex ${cardBg}`}
    >
      <Image
        src={CardsMap(card.card)}
        className={`
          transition
          hover:scale-[0.85]
          ${card.card === null ? 'cursor-pointer' : ''}
          ${cardIndex % 2 === 0 ? 'hover:rotate-[-8deg]' : 'hover:rotate-[8deg]'}
        `}
        draggable="false"
        onClick={() => card.card === null && onRevealCard(cardIndex)}
      />
    </div>
  );
}
