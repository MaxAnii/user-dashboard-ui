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
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const AddNewUser = () => {
	const [userData, setUserData] = useState({
		first_name: "",
		last_name: "",
		username: "",
		age: "",
		marital_status: "",
		is_employed: false,
		is_founder: false,
	});

	const newUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(userData);
		// call api to add new user
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="shadow-2xl hover:mb-1">Add User</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Add New User</DialogTitle>
					<DialogDescription>
						Add new profile here. Click submit when you're done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={newUser}>
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
						<Button type="submit" className="mt-3">
							Submit
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddNewUser;
