import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { toast } from 'sonner';
import { Wifi } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

const CARD_FIELD_CLASS =
  'rounded-none border-0 border-b border-white/30 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:border-white focus-visible:ring-0';

function formatCardNumber(value: string): string {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

type CardBrand = 'visa' | 'mastercard' | null;

function detectCardBrand(cardNumber: string): CardBrand {
  const digits = cardNumber.replace(/\D/g, '');
  if (!digits) return null;
  if (/^4/.test(digits)) return 'visa';
  if (
    /^5[1-5]/.test(digits) ||
    /^2(2[2-9]|[3-6]\d|7[01])/.test(digits) ||
    /^27[01]\d/.test(digits)
  ) {
    return 'mastercard';
  }
  return null;
}

const CARD_BRAND_LOGOS: Record<Exclude<CardBrand, null>, string> = {
  visa: '/Visa_Inc.-Logo.wine.svg',
  mastercard: '/Mastercard-Logo.wine.svg',
};

interface Props {
  amount: number;
}

export default function PaymentView({ amount }: Props): React.JSX.Element {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const cardBrand = detectCardBrand(cardNumber);

  const isCardComplete =
    cardNumber.replace(/\D/g, '').length === 16 &&
    cardHolder.trim().length > 0 &&
    expiry.length === 5 &&
    (cvv.length === 3 || cvv.length === 4);

  async function handlePay(): Promise<void> {
    setServerError('');
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      toast.success('Payment successful');
    } catch (err: unknown) {
      setServerError(
        err instanceof Error ? err.message : 'Failed to process payment',
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full space-y-4 relative">
      {/* Front of card */}
      <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-5 text-white shadow-lg flex flex-col justify-between shadow-black/50 mb-15 z-10 relative">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-white/60">
            Amount:{' '}
            <span className="text-white text-sm font-medium">
              ${amount.toFixed(2)}
            </span>
          </span>
          {cardBrand ? (
            <img
              src={CARD_BRAND_LOGOS[cardBrand]}
              alt={cardBrand}
              className="h-10 w-14 object-contain"
            />
          ) : (
            <div className="w-14 h-10 flex items-center justify-end">
              <Wifi className="size-6 rotate-90 opacity-80" />
            </div>
          )}
        </div>

        <Input
          value={cardNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCardNumber(formatCardNumber(e.target.value))
          }
          placeholder="1234 5678 9012 3456"
          inputMode="numeric"
          maxLength={19}
          className={`text-lg tracking-[0.2em] ${CARD_FIELD_CLASS}`}
        />

        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-wide text-white/60 mb-1">
              Card holder
            </p>
            <Input
              value={cardHolder}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCardHolder(e.target.value.toUpperCase())
              }
              placeholder="JOHN DOE"
              className={CARD_FIELD_CLASS}
            />
          </div>

          <div className="w-20">
            <p className="text-[10px] uppercase tracking-wide text-white/60 mb-1">
              Expires
            </p>
            <Input
              value={expiry}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setExpiry(formatExpiry(e.target.value))
              }
              placeholder="MM/YY"
              inputMode="numeric"
              maxLength={5}
              className={CARD_FIELD_CLASS}
            />
          </div>
        </div>
      </div>

      {/* Back of card (CVV) */}
      <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white shadow-lg overflow-hidden flex flex-col absolute -bottom-10 -right-30 shadow-black/50 items-end">
        <div className="mt-6 h-10 w-full bg-black" />
        <div className="mt-6 flex justify-end px-5 w-30">
          <div className="w-28 flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-wide text-white/60">
              CVC/CVV
            </p>
            <Input
              value={cvv}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))
              }
              placeholder="xxx-x"
              inputMode="numeric"
              maxLength={4}
              className="bg-white text-center text-slate-900"
            />
            <span className="text-[10px] text-white/60">
              Last 3 or 4 digits
            </span>
          </div>
        </div>
        {isCardComplete && (
          <Button onClick={handlePay} disabled={isLoading} className="w-full bg-slate-800 hover:bg-slate-900 text-white absolute bottom-0 left-0 rounded-t-none cursor-pointer">
            {isLoading ? 'Processing…' : 'Pay now'}
          </Button>
        )}
      </div>

      {serverError && <p className="text-sm text-destructive">{serverError}</p>}
    </div>
  );
}
