import { CustomButton } from "@/components/ui/custom-button"
import { ArrowRight, Mail, Save, Trash } from "lucide-react"

export default function ButtonExamples() {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton>Default</CustomButton>
          <CustomButton variant="destructive">Destructive</CustomButton>
          <CustomButton variant="outline">Outline</CustomButton>
          <CustomButton variant="secondary">Secondary</CustomButton>
          <CustomButton variant="ghost">Ghost</CustomButton>
          <CustomButton variant="link">Link</CustomButton>
          <CustomButton variant="gradient">Gradient</CustomButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <CustomButton size="sm">Small</CustomButton>
          <CustomButton size="default">Default</CustomButton>
          <CustomButton size="lg">Large</CustomButton>
          <CustomButton size="icon">
            <Mail className="h-4 w-4" />
          </CustomButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Button with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton leftIcon={<Mail className="h-4 w-4" />}>Email Us</CustomButton>
          <CustomButton rightIcon={<ArrowRight className="h-4 w-4" />}>Next Step</CustomButton>
          <CustomButton variant="destructive" leftIcon={<Trash className="h-4 w-4" />}>
            Delete
          </CustomButton>
          <CustomButton variant="outline" leftIcon={<Save className="h-4 w-4" />}>
            Save
          </CustomButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton isLoading>Loading</CustomButton>
          <CustomButton variant="outline" isLoading>
            Processing
          </CustomButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Full Width</h2>
        <div className="space-y-2 max-w-md">
          <CustomButton fullWidth>Full Width Button</CustomButton>
          <CustomButton variant="outline" fullWidth>
            Full Width Outline
          </CustomButton>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton disabled>Disabled</CustomButton>
          <CustomButton variant="outline" disabled>
            Disabled Outline
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

