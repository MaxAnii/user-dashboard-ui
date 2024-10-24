import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
interface userDataType {
	data: {
		first_name: string;
		last_name: string;
		username: string;
		age: string;
		marital_status: string;
		is_employed: boolean;
		is_founder: boolean;
	};
}
const EditUserData = ({ ...props }: userDataType) => {
	const [userData, setUserData] = useState({ ...props.data });

	const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(userData);
		// call api to update user details
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="">Edit</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Edit user data </DialogTitle>
					<DialogDescription>
						Edit user profike here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={updateUser}>
					<div className="grid w-full items-center gap-4">
						<div className="flex items-center gap-3 ">
							<div className="w-full">
								<Label htmlFor="firstname">First Name</Label>
								<Input
									id="First_Name"
									placeholder="Ansar"
									value={userData.first_name}
									onChange={(e) =>
										setUserData({ ...userData, first_name: e.target.value })
									}
								/>
							</div>
							<div className="w-full">
								<Label htmlFor="lastname">Last Name</Label>
								<Input
									id="Last_Name"
									placeholder="Baba"
									value={userData.last_name}
									onChange={(e) =>
										setUserData({ ...userData, last_name: e.target.value })
									}
								/>
							</div>
						</div>

						<div className="flex items-center gap-3">
							<div className="w-full">
								<Label>User Name</Label>
								<Input
									id="Username"
									placeholder="ansarbaba@123"
									value={userData.username}
									onChange={(e) =>
										setUserData({ ...userData, username: e.target.value })
									}
								/>
							</div>
							<div>
								<Label>Age</Label>
								<Input
									id="age"
									placeholder="xx"
									value={userData.age}
									onChange={(e) =>
										setUserData({ ...userData, age: e.target.value })
									}
								/>
							</div>
						</div>

						<div className="flex items-center gap-3 ">
							<div className="w-full">
								<Label htmlFor="marital_status">Marital Status</Label>
								<Select
									onValueChange={(value) =>
										setUserData({ ...userData, marital_status: value })
									}
									value={userData.marital_status}
								>
									<SelectTrigger id="marital_status">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="unmarried">Unmarried</SelectItem>
										<SelectItem value="married">Married</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="flex gap-3 gap-x-5">
							<div className="flex gap-x-2">
								<Checkbox
									checked={userData.is_employed}
									onCheckedChange={(value) =>
										setUserData({ ...userData, is_employed: !!value })
									}
								/>
								<Label>Is employed</Label>
							</div>
							<div className="flex gap-x-2">
								<Checkbox
									checked={userData.is_founder}
									onCheckedChange={(value) =>
										setUserData({ ...userData, is_founder: !!value })
									}
								/>
								<Label>Is Founder</Label>
							</div>
						</div>
					</div>

					<DialogFooter>
						<Button type="submit">save</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default EditUserData;
