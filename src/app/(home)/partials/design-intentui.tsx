"use client"

import { Link } from "react-aria-components/Link"
import { twMerge } from "tailwind-merge"
import { PageContainer } from "@/components/page-container"
import { buttonStyles } from "@/components/ui/button"

export function DesignIntentui() {
  return (
    <div className="border-page border-t bg-overlay text-fg">
      <PageContainer>
        <div className="border-page sm:border-x sm:p-6">
          <div className="relative mx-auto max-w-3xl py-12 text-center">
            <Link href="https://design.intentui.com">
              <MarkLogo />
            </Link>
            <div className="mt-4 mb-4 text-3xl sm:text-5xl/14">
              Launch faster with ready-made blocks and templates
            </div>
            <p className="mx-auto max-w-xl text-pretty text-center text-lg/8 text-muted-fg leading-relaxed sm:text-xl">
              Build modern web apps faster with 1000+ resources across components, blocks, patterns,
              templates, and starter kits.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-2 sm:mt-10 sm:flex-row sm:items-center">
              <Link
                className={buttonStyles({
                  size: "lg",
                })}
                href="https://design.intentui.com/blocks?utm_source=intentui.com&utm_medium=referral&utm_campaign=cta"
              >
                Browse blocks
              </Link>
              <Link
                className={buttonStyles({
                  size: "lg",
                  intent: "secondary",
                })}
                href="https://design.intentui.com/templates?utm_source=intentui.com&utm_medium=referral&utm_campaign=cta"
              >
                Get templates
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export const MarkLogo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={twMerge("mx-auto inline h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 7"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.902 5.517q-.4 0-.718-.206a1.4 1.4 0 0 1-.5-.598Q.5 4.321.5 3.761q0-.567.186-.957.189-.393.507-.592.32-.201.711-.201.3 0 .492.102.193.1.306.241t.175.264h.033V.92h.804v4.536h-.788V4.92h-.05a1.4 1.4 0 0 1-.179.264 1 1 0 0 1-.31.235 1.1 1.1 0 0 1-.485.097m.224-.658q.255 0 .434-.137a.86.86 0 0 0 .273-.388q.093-.248.093-.578t-.093-.573a.8.8 0 0 0-.27-.38.7.7 0 0 0-.437-.134.7.7 0 0 0-.448.14.85.85 0 0 0-.27.385q-.09.246-.09.562 0 .32.09.57a.9.9 0 0 0 .273.392q.181.141.445.141m3.699.666q-.51 0-.883-.213a1.44 1.44 0 0 1-.57-.607 2 2 0 0 1-.2-.928q0-.525.2-.921.202-.4.563-.62.36-.224.848-.224.315 0 .594.102.281.1.496.31.218.21.341.536.124.323.124.77v.247H4.55v-.54h2.02a.86.86 0 0 0-.099-.41.73.73 0 0 0-.272-.286.77.77 0 0 0-.404-.105.8.8 0 0 0-.432.12.8.8 0 0 0-.29.31.9.9 0 0 0-.104.419v.472q0 .296.109.51.108.21.303.323.195.11.456.11a1 1 0 0 0 .317-.048.7.7 0 0 0 .246-.149.6.6 0 0 0 .157-.241l.749.084q-.07.297-.27.518-.198.22-.505.341-.308.12-.705.12m4.63-2.57-.73.08a.6.6 0 0 0-.11-.208.54.54 0 0 0-.203-.157.74.74 0 0 0-.315-.06.77.77 0 0 0-.42.108q-.169.11-.167.282a.3.3 0 0 0 .109.241q.113.093.372.153l.58.124q.483.105.718.33.237.226.24.592a.93.93 0 0 1-.189.567q-.183.243-.512.38-.328.138-.753.138-.624 0-1.005-.261a1.05 1.05 0 0 1-.454-.734l.781-.075a.55.55 0 0 0 .226.348.8.8 0 0 0 .45.117q.285 0 .459-.117t.175-.29a.3.3 0 0 0-.113-.242.8.8 0 0 0-.346-.146l-.58-.122q-.49-.102-.725-.343a.84.84 0 0 1-.232-.616.87.87 0 0 1 .17-.545q.176-.233.485-.359a1.9 1.9 0 0 1 .72-.128q.6 0 .942.255.345.255.427.688m.485 2.503V2.055h.802v3.402zm.403-3.885a.47.47 0 0 1-.328-.126.4.4 0 0 1-.137-.308q0-.182.137-.308a.46.46 0 0 1 .328-.128q.193 0 .328.128a.4.4 0 0 1 .137.308q0 .18-.137.308a.46.46 0 0 1-.328.126m2.454 5.232q-.433 0-.742-.117a1.3 1.3 0 0 1-.499-.31 1.1 1.1 0 0 1-.261-.432l.722-.175q.049.1.142.197a.7.7 0 0 0 .25.164q.16.066.401.066a.92.92 0 0 0 .565-.166q.224-.165.224-.54v-.645h-.04a1.1 1.1 0 0 1-.182.255.9.9 0 0 1-.312.22q-.193.088-.485.088-.393 0-.711-.184a1.3 1.3 0 0 1-.505-.554q-.187-.37-.187-.926 0-.56.186-.946.189-.387.508-.587.319-.201.71-.201.3 0 .493.102.195.1.31.241t.175.264h.044v-.563h.79v3.458q0 .436-.207.722a1.25 1.25 0 0 1-.57.428q-.36.141-.82.141m.006-2.024q.255 0 .434-.124a.77.77 0 0 0 .273-.357q.093-.232.093-.558a1.6 1.6 0 0 0-.093-.563.8.8 0 0 0-.27-.374.7.7 0 0 0-.437-.135.7.7 0 0 0-.447.14.85.85 0 0 0-.27.382q-.09.242-.091.55 0 .312.09.547a.8.8 0 0 0 .273.363q.182.129.445.129m2.966-1.316v1.993h-.802V2.055h.766v.578h.04a.97.97 0 0 1 .375-.454q.259-.168.64-.168.353 0 .613.15.264.15.408.437.146.285.144.693v2.166h-.802V3.415q0-.34-.177-.534-.175-.192-.485-.192a.75.75 0 0 0-.375.093.65.65 0 0 0-.254.263.9.9 0 0 0-.091.419"
      />
      <path
        fill="currentColor"
        opacity={0.5}
        d="M20.013 5.506a.48.48 0 0 1-.346-.142.46.46 0 0 1-.142-.345.45.45 0 0 1 .142-.341.48.48 0 0 1 .346-.142q.195 0 .339.142a.466.466 0 0 1 .077.587.5.5 0 0 1-.177.177.46.46 0 0 1-.24.064"
      />
    </svg>
  )
}
