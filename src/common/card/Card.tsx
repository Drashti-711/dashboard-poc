
import {
    Card as UICard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type GlobalCardProps = {
    title: string
    description?: string
    content: React.ReactNode
    footer?: React.ReactNode
    isDescription?: boolean
    isFooter?: boolean
}

export const GlobalCard = ({
    title,
    description,
    content,
    footer,
    isDescription = false,
    isFooter = false
}: GlobalCardProps) => {
    return (
        <UICard style={{}}>
            <CardHeader className="">
                <CardTitle >{title}</CardTitle>
                {isDescription && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>{content}</CardContent>
            {isFooter && <CardFooter>{footer}</CardFooter>}
        </UICard>
    )
}
